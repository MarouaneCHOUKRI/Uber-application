import React from 'react';
import { StatusBar, StyleSheet, Text, Pressable, View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { collection, onSnapshot, query, addDoc, GeoPoint} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import db from "../../firebase"
import {B} from './Commun/Global'
import {auth} from '../Global'

const Demande = ({ navigation }) => {

  const [view, setView] = React.useState(null)
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
              if(isMounted){
                const q = query(collection(db, "Chauffeur", user.uid, "Demande"));
                onSnapshot(q, (querySnapshot) => {  
                  const content = []
                  const somme_revenue = []            
                  querySnapshot.forEach(doc => {  
                    if(doc.id != "PrimaryKey"){
                      try {
                        content.push(
                          <Pressable style={{ flex: 1, borderColor: 'black', borderWidth: 1, borderRadius: 15, marginBottom: 20}} key={doc.id}>
                
                            <View style={{marginLeft: 15, marginTop: 10}}>
                              <Text style={styles.texte}><B>Client :</B> {doc.data().Client} </Text>
                              <Text style={styles.texte}><B>Nombre de personne :</B> {doc.data().Nombre_de_personne} </Text>
                              <Text style={styles.texte}><B>Destination :</B> {doc.data().Destination_Client}</Text>
                              <Ripple
                                style={{ ...styles.button, marginTop: 10, marginBottom: 10}}
                                onPress={() => navigation.navigate('Details', {
                                  id: doc.id, 
                                  Client: doc.data().Client, 
                                  Nombre_de_personne : doc.data().Nombre_de_personne,
                                  Duree: doc.data().Duree_depuis_position_client,
                                  Tarif: doc.data().Tarif,
                                  Pos_Cli : doc.data().Position_Client,
                                  des_Cli : doc.data().Destination_Client
                                })}
                                rippleContainerBorderRadius={10} rippleColor='white'>
                                <Text style={{fontWeight: "bold", fontSize: 18, color: 'white'}}>Détails</Text>
                              </Ripple>
                            </View>
                          </Pressable>
                        )
                      } catch (error) {}
                    }
                  });

                  if(content.length == 0){
                    setView(
                    <View style={{jusifyContent: 'center', alignItems: 'center'}}><Text style={{letterSpacing: 2}}>Aucune <B>demande de course</B> disponible...</Text></View>)
                  }else{
                    setView(content)
                  }
                  
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
    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]} style={{backgroundColor: 'white'}}>
      
      <StatusBar hidden />
  
      <View style={{backgroundColor: 'white'}}>
                
          <View style={{flexDirection:"row", marginBottom: 49}}>
            
            <View style={{flex: 1, alignItems: 'flex-end', marginRight: 20}}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Menu", {expr: "Accueil"})}>

                <Image 
                  style={{marginTop: 30}}
                  source={require('../../../assets/Menu.png')} 
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        
        <View>
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Demandes de course</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>


      <View style={{paddingTop: 64, backgroundColor: 'white'}}>
        
        <View style={{marginLeft: 15, marginRight: 15}}>
          
          {view}
          
        </View>
      
      </View>  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  texte: {
    fontSize: 17,
    marginTop: 9
  },
  button: {
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: 15,
  },
});


export default Demande;



/*
addDoc(collection(db,"Chauffeur", user.uid, "Demande"), { 
            Client: "Chappell Roux",
            Duree_depuis_position_client : "1h35",
            Destination_Client: new GeoPoint(49.901118, 2.284000),
            Position_Client: new GeoPoint(49.904870, 2.289225), 
            Nombre_de_personne: 3,
            Tarif:  14
});
*/