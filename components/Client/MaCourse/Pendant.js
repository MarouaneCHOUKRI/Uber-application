import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Button,
  TextInput,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { Dimensions } from 'react-native';
import Ripple from 'react-native-material-ripple';

const Pendant = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
      <StatusBar hidden />
  
      <View>
        
        <View style={{flexDirection:"row"}}>
          <View style={{flex: 1}}/>
          <View style={{flex: 1}}>
            <Pressable onPress={() => navigation.navigate('Menu')} style={{alignItems: 'flex-end', marginRight: 20}}>
              <Image 
                style={{marginTop: 30}}
                source={require('../../../assets/Menu.png')} 
              />
            </Pressable>
          </View>
        </View>
        
        <View>
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Ma course</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>

      <View>
          <Text style={{fontSize: 24, marginLeft: 20, paddingTop: 30}}><B>Informations</B></Text>
      </View>

      <View style={{paddingTop: 30}}>
        <View style={{flexDirection:"row", paddingBottom: 27.31}}>
          <View style={{
              width: 80,
              height: 88.16, 
              borderWidth: 1,
              marginLeft: 30,
              backgroundColor: '#C4C4C4',
              borderColor: '#C4C4C4',}}/>
        
          <View style={{marginLeft: 21}}>
                <Text style={styles.text}><B>Chauffeur :</B> Nom Prénom</Text>
                <Text style={styles.text}><B>Véhicule :</B> nom</Text>
                <Text style={styles.text}><B>Plaque :</B> XXXX-XXXX</Text>
              
          </View>
        </View>

        <View style={{paddingTop: 29.84}}>
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize: 24, marginBottom: 30}}><B>Destination :</B> Adresse</Text>
            <Text style={{fontSize: 24, marginBottom: 30}}><B>Temps réctent :</B> XXmin</Text>
          </View>
          <Ripple
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 15,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 30,
              padding: 8
            }}
            >
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Envoyer à un proche
            </Text>
          </Ripple>
        </View>

        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15, marginBottom: 17}}/>
      
      </View>

      <View>
      
        <View style={{paddingTop: 30}}>
            <Text style={{fontSize: 24, marginBottom: 30, marginLeft: 20}}><B>Un soucis ?</B></Text>
            <Ripple
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 15,
              marginRight: 15,
              marginBottom: 73,
              marginLeft: 15,
              padding: 8
            }}
            onPress={() => navigation.navigate('Urgence')}>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Contacter les urgences
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
    marginBottom: 8.82
  },
});

export default Pendant;
