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

const Menu = ({ navigation}) => {
  return (
    <View
      style={{ flex: 1, flexDirection: 'column', backgroundColor: '#E5E5E5' }}>
      <StatusBar hidden />
      <View style={{ flex: 1 }}>
        <Pressable
          style={{
            position: 'absolute',
            right: 0,
            flex: 1,
            marginRight: 22.52,
            marginTop: 30,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            style={{ height: 37.48, width: 37.48 }}
            source={require('../../../assets/fermer.png')}
          />
        </Pressable>
      </View>

      <View
        style={{ jusifyContent: 'center', alignItems: 'center', flex: 9.5 }}>
        <Pressable style={{ marginTop: 118.52, marginBottom: 30 }}>
          <Text style={styles.text}>Accueil</Text>
        </Pressable>
        <Image source={require('../../../assets/Line.png')} />
        <Pressable style={{ marginTop: 20, marginBottom: 20 }}>
          <Text style={{ ...styles.text, color: 'white' }}>Ma course</Text>
        </Pressable>
        <Image source={require('../../../assets/Line.png')} />
        <Pressable style={{ marginTop: 20, marginBottom: 30 }}>
          <Text style={styles.text}>Planifier</Text>
        </Pressable>
        <Image source={require('../../../assets/Line.png')} />
        <Pressable style={{ marginTop: 20, marginBottom: 30 }}>
          <Text style={styles.text}>Compte</Text>
        </Pressable>
        <Image source={require('../../../assets/Line.png')} />
        <Pressable
          style={{ marginTop: 20, marginBottom: 185 }}
          onPress={() => navigation.navigate('Connexion')}>
          <Text style={styles.text}>Déconnexion</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default Menu;
