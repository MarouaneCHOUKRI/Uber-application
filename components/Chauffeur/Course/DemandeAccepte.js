import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import { collection, onSnapshot, query, Timestamp} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import db from "../../firebase"
import {auth} from '../Global'


const DemandeAccepte = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
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
                const q = query(collection(db, "Chauffeur", user.uid, "Accepte"));
                onSnapshot(q, (querySnapshot) => {
                  const content = []
                  const somme_revenue = []               
                  querySnapshot.forEach(doc => {
                    if(doc.id != "PrimaryKey"){
                      try {
                        content.push(
                          <Pressable style={{ flex: 1, borderColor: 'black', borderWidth: 1, borderRadius: 10, marginBottom: 20}} key={doc.id}>
                            <View style={{marginLeft: 19, marginTop: 10}}>  
                              <Text style={styles.texte}><B>Client :</B> {doc.data().Client}</Text>
                              <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={{...styles.texte, marginRight: 15}}><B>Date :</B> {doc.data().Date}</Text>
                                <Text style={styles.texte}><B>Heure :</B> {doc.data().Heure}</Text> 
                              </View>
                              <Text style={styles.texte}><B>Destination :</B> {doc.data().Destination}</Text>
                              <Ripple
                                style={{ ...styles.button, marginTop: 10, marginBottom: 10}}
                                onPress={() => navigation.navigate('Details_accepte', {
                                  id: doc.id, 
                                  Client: doc.data().Client, 
                                  Nombre_de_personne : doc.data().Nombre_de_personne, 
                                  Position : doc.data().Position,
                                  Destination: doc.data().Destination, 
                                  Duree: doc.data().Duree_depuis_position_client,
                                  Tarif: doc.data().Tarif,
                                  Pass: doc.data().Pass})}
                                  rippleContainerBorderRadius={10}
                                  rippleColor='white'>
                                <Text style={{fontWeight: "bold", fontSize: 18, color: 'white'}}>Détails</Text>
                              </Ripple>
                            </View>
                          </Pressable>
                        )
                      }catch (error) {}
                    }
                  });
                  if(content.length == 0){
                    setView(
                    <View style={{jusifyContent: 'center', alignItems: 'center'}}><Text style={{letterSpacing: 2, marginTop: 29}}>Aucune demande de course <B>acceptée </B> disponible...</Text></View>)
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
                
          <View style={{flexDirection:"row"}}>
            
            <View style={{flex: 1}}/>
            <View style={{marginRight: 20}}>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Menu", {expr: "Planifier"})} style={{alignItems: 'flex-end', marginRight: 20}}>

                <Image 
                  style={{marginTop: 30}}
                  source={require('../../../assets/Menu.png')} 
                />
              </TouchableWithoutFeedback>
            </View>

          </View>
        
        <View>
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 16, marginTop: 51}}><B>Demandes de course planifiée</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>
        <View style={{flex: 1, flexDirection: "row", paddingBottom: 30}}>
            <Pressable
                style={{
                backgroundColor: "#E5E5E5",
                borderRadius: 10,
                padding: 5,
                marginLeft: 15,
                marginRight: 25,
                marginTop: 31,
                height: 50,
                width: 160,
                flex: 1,
                borderWidth: 0
                }}
                onPress={() => {navigation.reset({ index: 0, routes: [{ name: 'DemandeAttentePlanifier' }], })}}>
                <Text
                style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
                En attente
                </Text>
            </Pressable>
            <Pressable
                style={{
                backgroundColor: "#C4C4C4",
                borderRadius: 10,
                padding: 5,
                marginTop: 31,
                height: 50,
                width: 160,
                flex: 1,
                marginRight: 15,
                borderWidth: 1
                }}>
                <Text
                style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
                Acceptées
                </Text>
            </Pressable>
        </View>

      </View>


      <View style={{paddingBottom: 50, backgroundColor: 'white'}}>
        
        <View style={{marginLeft: 15, marginRight: 15}}>
          {view}
        </View>
      
      </View>  

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  texte: {
    fontSize: 18,
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
    marginRight: 15
  },
});


export default DemandeAccepte;