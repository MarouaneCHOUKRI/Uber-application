import React from 'react';
import { StatusBar, StyleSheet, Text, Pressable, View, Image, ScrollView } from 'react-native';
import Ripple from 'react-native-material-ripple';
import Geocoder from 'react-native-geocoding';


const Estimation = ({ navigation, route}) => {

  Geocoder.init("AIzaSyCpg1BPjQVgeeNT88z0Jm8jEMT4PEObKDg")

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}} showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]}>
      
      <StatusBar hidden />
  
      <View style={{backgroundColor: 'white'}}>
        
        <View style={{flexDirection:"row"}}>
          <View style={{flex: 1}}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={{ height: 30, width: 30, marginLeft: 15, marginTop: 20}}
                source={require('../../../assets/fleche-gauche.png')}
              />
            </Pressable>
          </View>
          <View style={{flex: 1}}>
            <Pressable onPress={() => navigation.navigate("Menu", {expr: "Commande"})} style={{alignItems: 'flex-end', marginRight: 20}}>
              <Image 
                style={{marginTop: 30}}
                source={require('../../../assets/Menu.png')} 
              />
            </Pressable>
          </View>
        </View>
        
        <View>
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Course</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>

      <View style={{ paddingTop: 70, backgroundColor: 'white'}}>
        <View style={{flexDirection:"row", paddingBottom: 30}}>
          
          <View style={{ flex: 1}}>
            <Image
              style={{height: 100, width: 100, margin: 10}}
              source={require('../../../assets/user.png')}
            />
          </View>
        
          <View style={{marginLeft: 21, marginTop: 10, flex: 2, marginRight: 13}}>
                <Text style={styles.text}><B>Chauffeur :</B> {route.params.Prénom} {route.params.Nom}</Text>
                <Text style={styles.text}><B>Véhicule :</B> {route.params.Véhicule}</Text>
                <Text style={styles.text}><B>Plaque :</B> {route.params.Plaque}</Text>
          </View>

        </View>
        
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 50, marginRight: 50}} />

        <View style={{paddingTop: 24, marginLeft: 20, marginRight: 20, paddingTop: 20, backgroundColor: 'white'}}>
          
          <View style={{width: 380}}>
            <Text style={{fontSize: 15, marginBottom: 30}}><B>Destination :</B> {route.params.Destination}</Text>
            <Text style={{fontSize: 15, marginBottom: 30}}><B>Durée approximative :</B>  - h</Text>
            <Text style={{fontSize: 15, marginBottom: 70}}><B>Tarif :</B>  - Francs</Text>
          </View>
        
        </View>
      
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15, marginBottom: 40}}/>
      
      </View>

      <View style={{backgroundColor: 'white'}}>
      
        <View style={{marginLeft: 15, marginRight: 15}}>
          <Ripple
            style={{
              backgroundColor: 'black',
              borderRadius: 10,
              marginBottom: 17,
              padding: 8
            }}
            onPress={() => navigation.navigate("Paiement")}
            rippleContainerBorderRadius={10} rippleColor='white'>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'white'}}>
              Valider
            </Text>
          </Ripple>
          <Ripple
            style={{
              backgroundColor: 'black',
              borderRadius: 10,
              padding: 8,
              marginBottom: 26
            }}
            onPress={() => navigation.goBack()}
            rippleContainerBorderRadius={10} rippleColor='white'>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'white'}}>
              Annuler
            </Text>
          </Ripple>
        </View>
      
      </View>  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize: 15,
    marginBottom: 15
  },
});

export default Estimation;
