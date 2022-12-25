import React from 'react';
import { StatusBar, StyleSheet, Text, Pressable, View, Image, ScrollView, } from 'react-native';
import Ripple from 'react-native-material-ripple';
import db from "../../firebase"
import { collection, query, onSnapshot} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import {getAuth} from "firebase/auth";
import { getPreciseDistance } from 'geolib';

const Choix = ({ navigation, route}) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  const Destination = route.params.Destination
  const [view, setView] = React.useState(null)
  const auth = getAuth()
  let isMounted = true
  
  React.useEffect(() => {
                    
    setView(<View style={{jusifyContent: 'center', alignItems: 'center' }}>
    <Image 
      style={{marginTop: 30, height: 80, width: 80}}
      source={require('../../../assets/chargement.gif')} 
    />
    </View>)

    if(isMounted){
      const q = query(collection(db, "Chauffeur"));
      onSnapshot(q, (querySnapshot) => {
          const content = [] 
          querySnapshot.forEach((doc) => { 
            try {
              if(doc.data().Disponible){

                if((getPreciseDistance( { latitude: doc.data().Position.latitude, longitude: doc.data().Position.longitude },{ latitude: route.params.Position_latitude, longitude: route.params.Position_longitude },)/1000) < 5){  
                  content.push(
                    <View key={doc.id}>
                      <Ripple style={{borderColor: 'black', borderWidth: 1, borderRadius: 15, marginBottom: 20}} rippleContainerBorderRadius={15} 
                      onPress={() => navigation.navigate('Estimation', {
                        Prénom : doc.data().Prénom,
                        Nom : doc.data().Nom,  
                        Véhicule : doc.data().Véhicule, 
                        Plaque : doc.data().Plaque,
                        Destination : Destination,
                        Position_latitude : route.params.Position_latitude,
                        Position_longitude : route.params.Position_longitude
                      })}
                      >
                        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10}}>
                          <View>
                            <Image
                              style={{height: 100, width: 100, margin: 10, marginTop: 20}}
                              source={require('../../../assets/user.png')}
                            />
                          </View>
                          <View style={{marginLeft: 19, marginTop: 15, width: 230}}>
                            <Text style={styles.text}><B>Chauffeur :</B> {doc.data().Prénom} {doc.data().Nom}</Text>
                            <Text style={styles.text}><B>Véhicule :</B> {doc.data().Véhicule}</Text>
                            <Text style={styles.text}><B>Plaque :</B> {doc.data().Plaque}</Text>
                          </View>
                        </View>
                      </Ripple>
                    </View>
                  )
                }
                
              }else{
                setView(<View style={{jusifyContent: 'center', alignItems: 'center'}}><Text style={{letterSpacing: 2, marginTop: 50}}>Pas de <B>Chauffeur</B> disponible pour l'instant...</Text></View>)
              }

            }catch (error) {}
        });
        
        if(content.length != 0){
          setView(content)                  
        }else{
          setView(<View style={{jusifyContent: 'center', alignItems: 'center'}}><Text style={{letterSpacing: 2, marginTop: 50}}>Pas de <B>Chauffeur</B> disponible pour l'instant...</Text></View>)
        }

        });
    }
    return () => {
      isMounted = false;
      setView(null)
    };
  }, []);

  return (
    <ScrollView  showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]}>
      <StatusBar hidden />

      <View>
        <View style={{ marginLeft: 15, marginTop: 20, position: 'absolute' }}>
          <Pressable onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Recherche' }], })}>
            <Image
              style={{ height: 30, width: 30 }}
              source={require('../../../assets/fleche-gauche.png')}
            />
          </Pressable>
        </View>
        <Pressable
          style={{
            position: 'absolute',
            right: 0,
            flex: 1,
            marginRight: 20,
            marginTop: 30,
          }}
          onPress={() => navigation.navigate("Menu", {expr: "Commande"})}>
          <Image source={require('../../../assets/Menu.png')} />
        </Pressable>
      </View>

      <View style={{marginTop: 100}}>
        <Text style={{fontSize: 34, paddingBottom: 50, marginLeft: 11}}><B>Véhicules disponibles</B></Text>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
      </View>
    
      <View style={{paddingLeft: 15, paddingRight: 15, marginTop: 80}}>
          {view}
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize: 14,
    marginBottom: 10,
  },
});

export default Choix;