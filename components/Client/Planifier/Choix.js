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
import Ripple from 'react-native-material-ripple';

const Choix = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  const boucle = () => {
    let content = [];

    for (let i = 0; i < 50; i++) {
      content.push(
        <Ripple style={{ flex: 1, borderColor: 'black', borderWidth: 1, borderRadius: 15, marginBottom: 20}}  onPress={() => navigation.navigate('Estimation')}>
            
            <View style={{ flex: 1, flexDirection: 'row'}}>
            
              <View style={{
              width: 80,
              height: 80, 
              borderWidth: 1,
              margin: 10,
              backgroundColor: '#C4C4C4',
              borderColor: '#C4C4C4',}}
              />

              <View style={{marginLeft: 19, marginTop: 10}}>
                <Text style={styles.text}><B>Chauffeur :</B> Nom Prénom</Text>
                <Text style={styles.text}><B>Véhicule :</B> nom</Text>
                <Text style={styles.text}><B>Plaque :</B> XXXX-XXXX</Text>
              </View>

            </View>
        </Ripple>
      );
    }

    return content;
  };

  const [text_x, setx] = React.useState(boucle());

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <StatusBar hidden />

      <View style={{ flex: 0.4}}>
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

      <View style={{ flex: 0.5}}>
        <Text style={{fontSize: 34, paddingBottom: 60, marginLeft: 11}}><B>Véhicules disponibles</B></Text>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
      </View>

      <ScrollView style={{ flex: 1, paddingLeft: 15, paddingRight: 15}}>
        <View>
          {text_x}
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize: 18
  },
});

export default Choix;
