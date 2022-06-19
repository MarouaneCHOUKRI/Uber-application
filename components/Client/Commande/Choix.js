import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Ripple from 'react-native-material-ripple';

const Choix = ({ navigation, route}) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  const Destination = route.params.Destination

  return (
    <View>
      <StatusBar hidden />

      <View>
        <View style={{ marginLeft: 15, marginTop: 20, position: 'absolute' }}>
          <Pressable onPress={() => navigation.goBack()}>
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
          onPress={() => navigation.navigate('Menu')}>
          <Image source={require('../../../assets/Menu.png')} />
        </Pressable>
      </View>

      <View style={{marginTop: 100}}>
        <Text style={{fontSize: 34, paddingBottom: 50, marginLeft: 11}}><B>Véhicules disponibles</B></Text>
        <View style={{ jusifyContent: 'center', alignItems: 'center', paddingBottom: 10}}> 
          <Text style={{color: '#4784F1'}}><B>🗺️ {Destination} 🗺️</B></Text>
        </View>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
      </View>

      <ScrollView style={{paddingLeft: 15, paddingRight: 15, marginTop: 80}}>
        <View>
        <Ripple style={{ flex: 1, borderColor: 'black', borderWidth: 1, borderRadius: 15, marginBottom: 20}}  onPress={() => navigation.navigate('Estimation')}>
            
            <View style={{ flex: 1, flexDirection: 'row'}}>
            
              <View>
                <Image
                  style={{height: 100, width: 100, margin: 10}}
                  source={require('../../../assets/user.png')}
                />
              </View>

              <View style={{marginLeft: 19, marginTop: 10}}>
                <Text style={styles.text}><B>Chauffeur :</B> Nom Prénom</Text>
                <Text style={styles.text}><B>Véhicule :</B> nom</Text>
                <Text style={styles.text}><B>Plaque :</B> XXXX-XXXX</Text>
              </View>

            </View>
        </Ripple>
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    marginBottom: 10
  },
});

export default Choix;
