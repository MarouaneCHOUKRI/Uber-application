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
import { doc, addDoc, deleteDoc, collection} from "firebase/firestore";
import db from "../../firebase"
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../Global'

const Attente = ({ navigation, route}) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  
  function accepter(){
    onAuthStateChanged(auth, (user) => { if(user){ 
      addDoc(collection(db,"Chauffeur", user.uid, "Accepte"), { 
        Nan: false 
      });
      deleteDoc(doc(db, "Chauffeur", user.uid, "Attente", route.params.id))
      navigation.reset({ index: 0, routes: [{ name: 'DemandeAccepterPlanifier' }] })
    }})
  }

  function refuser(){
    onAuthStateChanged(auth, (user) => { if(user){ deleteDoc(doc(db, "Chauffeur", user.uid, "Attente", route.params.id))} })
    navigation.reset({ index: 0, routes: [{ name: 'DemandeAttentePlanifier' }] })
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]} style={{backgroundColor: 'white'}}>
      
      <StatusBar hidden />
  
      <View style={{backgroundColor: 'white'}}>
        
        <View style={{flexDirection:"row"}}>
          <View style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={() => navigation.reset({ index: 0, routes: [{ name: 'DemandeAttentePlanifier' }], })}>
              <Image
                style={{ height: 30, width: 30, marginLeft: 15, marginTop: 20}}
                source={require('../../../assets/fleche-gauche.png')}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', marginRight: 20}}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Menu", {expr: "Planifier"})} style={{alignItems: 'flex-end', marginRight: 20}}>
              <Image 
                style={{marginTop: 30}}
                source={require('../../../assets/Menu.png')} 
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
        
        <View>
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 17, marginTop: 51}}><B>Détails de course planifiée - Attente</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>

      <View style={{paddingTop: 28, backgroundColor: 'white'}}>
        
        <View style={{marginLeft: 21}}>
          <Text style={styles.text}><B>Client : </B>{route.params.Client}</Text>
          <Text style={styles.text}><B>Nombre de personnne : </B>{route.params.Nombre_de_personne}</Text>
          <Text style={styles.text}><B>Position : </B>{route.params.Position}</Text>
          <Text style={styles.text}><B>Date : </B>{route.params.Date}</Text>
          <Text style={{...styles.text, marginBottom: 52}}><B>Heure : </B>{route.params.Heure}</Text>
        </View>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 48, marginRight: 47}} />

        <View style={{paddingTop: 23.39}}>
          <View style={{marginLeft: 21}}>
            <Text style={{fontSize: 18, marginBottom: 33.06}}><B>Destination : </B>{route.params.Destination}</Text>
            <Text style={{fontSize: 18, marginBottom: 33.06}}><B>Durée depuis position client : </B>{route.params.Duree}</Text>
            <Text style={{fontSize: 18, marginBottom: 71.92}}><B>Tarif :</B> {route.params.Tarif}€</Text>
          </View>
        
        </View>
      
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15, marginBottom: 17}}/>
      
      </View>

      <View>
      
        <View style={{marginLeft: 15, marginRight: 15, backgroundColor: 'white'}}>
          <Ripple
            style={{
              backgroundColor: 'black',
              borderRadius: 10,
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
              borderRadius: 10,
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

export default Attente;
