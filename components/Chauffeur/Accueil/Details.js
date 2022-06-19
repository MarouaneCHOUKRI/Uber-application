import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import { doc, deleteDoc, addDoc, collection} from "firebase/firestore";
import db from "../../firebase"
import {onAuthStateChanged } from "firebase/auth";
import {B} from './Commun/Global'
import {auth} from '../Global'
import Geocoder from 'react-native-geocoding';
import {GOOGLE_MAPS_APIKEY} from './Commun/ApiKey'

const Details = ({ navigation, route}) => {

  Geocoder.init(GOOGLE_MAPS_APIKEY);

  function accepter(){
    onAuthStateChanged(auth, (user) => { 
      if(user){
        //deleteDoc(doc(db, "Chauffeur", user.uid, "Demande", route.params.id))
        addDoc(collection(db,"Chauffeur", user.uid, "Stats"), { 
          Client : route.params.Client,
          Destination: route.params.des_Cli,
          Nombre_de_personne: route.params.Nombre_de_personne,
          Revenue: route.params.Tarif
        });
      }
    })

    Geocoder.from(route.params.Pos_Cli)
    .then(json => {
      var location = json.results[0].geometry.location;
      navigation.reset({ 
        index: 0, 
        routes: [{ name: 'Trajet', params : {
          Position : location,
          Destination : route.params.des_Cli
        } } ]}
      )
    })
    .catch(error => console.warn(error));
  }
  function refuser(){
    onAuthStateChanged(auth, (user) => { if(user){deleteDoc(doc(db, "Chauffeur", user.uid, "Demande", route.params.id))} })
    navigation.reset({ index: 0, routes: [{ name: 'Demande' }] })
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]} style={{backgroundColor: 'white'}}> 
      
      <StatusBar hidden />
  
      <View style={{backgroundColor: 'white'}}>
        
        <View style={{flexDirection:"row"}}>
          <View style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Demande' }] })}>
              <Image
                style={{ height: 30, width: 30, marginLeft: 15, marginTop: 20}}
                source={require('../../../assets/fleche-gauche.png')}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', marginRight: 20}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Menu", {expr: "Accueil"})} style={{alignItems: 'flex-end', marginRight: 20}}>
              <Image 
                style={{marginTop: 30}}
                source={require('../../../assets/Menu.png')} 
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
        
        <View>
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Détails de course</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>

      <View style={{paddingTop: 28 , backgroundColor: 'white'}}>
        
        <View style={{marginLeft: 30}}>
          <Text style={styles.text}><B>Client : </B>{route.params.Client}</Text>
          <Text style={styles.text}><B>Nombre de personnne : </B>{route.params.Nombre_de_personne}</Text>
          <Text style={{...styles.text, marginBottom: 52}}><B>Position : </B>{route.params.Pos_Cli}</Text>
        </View>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 48, marginRight: 47}} />

        <View style={{paddingTop: 23.39}}>
          <View style={{marginLeft: 30}}>
            <Text style={{fontSize: 18, marginBottom: 33.06}}><B>Destination :</B> {route.params.des_Cli}</Text>
            <Text style={{fontSize: 18, marginBottom: 33.06}}><B>Durée depuis position client : </B>{route.params.Duree}</Text>
            <Text style={{fontSize: 18, marginBottom: 71.92}}><B>Tarif :</B> {route.params.Tarif}€</Text>
          </View>
        </View>
      
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15, marginBottom: 17}}/>
      
      </View>

      <View style={{backgroundColor: 'white'}}>
        <View style={{marginLeft: 15, marginRight: 15}}>
          <Ripple
            style={{
              backgroundColor: 'black',
              borderRadius: 15,
              marginBottom: 17,
              padding: 8
            }}
            onPress={() => accepter()}
            rippleContainerBorderRadius={10}
            rippleColor='white'>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'white'}}>
              Accepter
            </Text>
          </Ripple>
          <Ripple
            style={{
              backgroundColor: 'black',
              borderRadius: 15,
              padding: 8,
              marginBottom: 26
            }}
            onPress={() => refuser()}
            rippleContainerBorderRadius={10}
            rippleColor='white'>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'white'}}>
              Refuser
            </Text>
          </Ripple>
        </View>
      
      </View>  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Details;




/*

addDoc(collection(db,"Chauffeur", user.uid, "Demande"), { 
  Client: "Chappell Roux",
  Duree_depuis_position_client : "1h35", 
  Nombre_de_personne: 3,
  Tarif: 14
});
*/