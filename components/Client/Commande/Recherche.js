import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import { Dimensions } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const Recherche = ({ navigation }) => {
  
  let variable = null;
  const ref = React.useRef();

  function accepter(){
    if(variable && variable.description == ref.current?.getAddressText()){
      navigation.navigate('Choix', { Destination : variable.description})
      variable = null;
      ref.current?.clear();
    }

  }
  
  return (
    <View>
      <StatusBar hidden />
      <View>
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

      <View style={{ marginLeft: 15, marginTop: Dimensions.get('window').height / 6, color:'blue', marginRight: 15}}>
        <GooglePlacesAutocomplete
        ref={ref}
        placeholder='Destination'
        minLength={3}
        suppressDefaultStyles={true}
        isFocused={(isFocused=null)=>console.log(isFocused)}
        onPress={(data = null) => {
          if(data){
            variable = data;
          }
        }}
        styles={{
          textInputContainer: {
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
          },
          textInput: {
            height: 40,
            fontSize: 20,
            marginLeft: 8,
            marginTop : 8,
            marginBottom: 8
          },
          separator: {
            height: 3,
            backgroundColor: 'black',
          },
          row: {
            padding: 13,
            height: 44,
            flexDirection: 'row',
          },
        }}
        query={{
          key: 'AIzaSyCpg1BPjQVgeeNT88z0Jm8jEMT4PEObKDg',
          language: 'en',
          components: 'country:fr',
        }}
        />
      </View>

      <View style={{ jusifyContent: 'center', alignItems: 'center', marginTop: 70}}>
      
      <Image 
       style={{height: 390, width: 390}}
       source={require('../../../assets/carte.png')} 
      />

      </View>

      <View>
        <Ripple
          style={{
            ...styles.button,
            backgroundColor: 'black',
            marginRight: 15,
            marginTop: 100
          }}
          onPress={() => accepter()} 
          rippleContainerBorderRadius={10} rippleColor='white'>
          <Text
            style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'white'}}>
            Valider
          </Text>
        </Ripple>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 8,
    marginLeft: 15,
  },
  ligne: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  texte: {
    fontSize: 24,
    marginTop: 21,
    marginBottom: 21,
  },
});

export default Recherche;