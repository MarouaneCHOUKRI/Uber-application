import React from 'react';
import { StatusBar, StyleSheet, Text, Pressable, View, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { collection, onSnapshot, query} from "firebase/firestore";
import {onAuthStateChanged } from "firebase/auth";
import db from "../../firebase"
import {auth} from '../Global'


const Stats = ({ navigation }) => {
  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  const [revenue, setRevenue] =  React.useState(null);
  const [view, setView] = React.useState(null);
  let isMounted = true;

  React.useEffect(() => {
    setView(<View style={{jusifyContent: 'center', alignItems: 'center' }}>
    <Image 
      style={{marginTop: 30, height: 80, width: 80}}
      source={require('../../../assets/chargement.gif')} 
    />
    </View>)
    onAuthStateChanged(auth, (user) => {
        if(user){
              if(isMounted ){
                const q = query(collection(db, "Chauffeur", user.uid, "Stats"));
                onSnapshot(q, (querySnapshot) => {
                  const content = []
                  const somme_revenue = []
                  querySnapshot.forEach((doc) => {
                    if(doc.id != "PrimaryKey"){
                      try {
                        content.push(
                          <View style={{marginLeft: 15, marginRight: 15}} key={doc.id}> 
                            <Pressable style={{ flex: 1, borderColor: 'black', borderWidth: 1, borderRadius: 15, marginBottom: 20}}>
                              <View style={{marginLeft: 19, marginTop: 10}}>
                                <Text style={styles.texte}><B>Client</B> : {doc.data().Client}</Text>
                                <Text style={styles.texte}><B>Nombre de personne</B> : {doc.data().Nombre_de_personne}</Text>
                                <Text style={styles.texte}><B>Destination </B>: {doc.data().Destination}</Text>
                                <Text style={{...styles.texte, marginBottom: 15}}><B>Revenues</B> : {doc.data().Revenue}€</Text>
                              </View>
                            </Pressable>
                          </View>
                        )
                        somme_revenue.push( doc.data().Revenue)
                      }catch (error) {}
                    }
                  });
                  if(content.length == 0){
                    setView(<View style={{jusifyContent: 'center', alignItems: 'center'}}><Text style={{letterSpacing: 2, marginTop: 50}}>Aucun <B>revenu</B> pour l'instant...</Text></View>)
                  }else{
                    setView(content)
                  }
                  const initialValue = 0;
                    const sumWithInitial = somme_revenue.reduce(
                      (previousValue, currentValue) => previousValue + currentValue,
                      initialValue
                  );
                  setRevenue( 
                    <View style={{marginLeft: 15, marginTop: 10, alignItems: 'center', borderRadius: 15, 
                      marginBottom: 20, backgroundColor: '#E5E5E5', marginRight: 15}}>
                      <Text style={{fontSize: 36, marginBottom: 31}}><B>Revenue total</B></Text>
                      <Text style={{fontSize: 24, marginBottom: 26}}><B>{sumWithInitial}€</B></Text>
                    </View>
                  )
                });
              }
          }
      });
      return () => {
        isMounted = false;
        setView(null)
      };
  }, []);
  
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}  stickyHeaderIndices={[1]} style={{backgroundColor: 'white'}}>
      
      <StatusBar hidden />
  
      <View style={{backgroundColor: 'white'}}>
                
          <View style={{flexDirection:"row", marginBottom: 49}}>
            
            <View style={{flex: 1, alignItems: 'flex-end', marginRight: 20}}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Menu", {expr: "Compte"})}>

                <Image 
                  style={{marginTop: 30}}
                  source={require('../../../assets/Menu.png')} 
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        
        <View style={{alignItems: 'center'}}>
          <View style={{flex: 1, flexDirection: 'row', marginBottom: 20}}>
            <Pressable style={{backgroundColor: '#C4C4C4', marginRight: 94, height: 90, width: 90, borderRadius: 50, borderWidth: 1, borderColor: 'black'}}><Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 34}}>Stats</Text></Pressable>
            <Pressable onPress={() => {navigation.reset({ index: 0, routes: [{ name: 'Profil' }], })}} style={{backgroundColor: '#C4C4C4', height: 90, width: 90, borderRadius: 50,  borderWidth: 0, borderColor: 'black'}}><Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 34}}>Profil</Text></Pressable>
          </View>
        </View>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
      </View>

      <View style={{paddingTop: 20, paddingBottom: 20}}>
        {revenue}
        {view}
      </View>    
      
    </ScrollView>
  );}

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    marginTop: 50,
    marginLeft: 63,
    marginRight: 62,

  },
  texte: {
    fontSize: 17.5
  }
});


export default Stats;
