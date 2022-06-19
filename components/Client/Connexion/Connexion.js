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

const Connexion = ({ navigation }) => {
  const [text_email, onChangeTextEmail] = React.useState(null);
  const [text_password, onChangeTextPassword] = React.useState(null);

  return (
    <ScrollView>
      
      <StatusBar hidden />
      <SafeAreaView style={{ jusifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../../assets/user.png')}
          style={{ marginTop: 85, height: 150, width: 150}}
        />
        <Text style={styles.text_connectez_vous}>Connectez-vous</Text>
        <TextInput
          style={styles.input_email}
          value={text_email}
          onChangeText={onChangeTextEmail}
          placeholder="Email"
          placeholderTextColor="#000"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input_password}
          value={text_password}
          onChangeText={onChangeTextPassword}
          keyboardType="default"
          placeholder="Mot de passe"
          placeholderTextColor="#000"
          secureTextEntry
        />
        <Ripple
          style={{ ...styles.button, marginTop: 20 }}
          onPress={() => navigation.navigate('Accueil')}
          rippleContainerBorderRadius={10}
          rippleColor='white'>
          <Text style={styles.button_texte}>Connexion</Text>
        </Ripple>
        <Text style={styles.texte}>mot de passe oublié ?</Text>

        <Ripple
          style={{ ...styles.button, marginTop: 30, marginBottom: 129 }}
          onPress={() => navigation.navigate('Inscription')}
          rippleContainerBorderRadius={10}
          rippleColor='white'>
          <Text style={styles.button_texte}>S'inscrire</Text>
        </Ripple>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text_connectez_vous: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 35,
  },
  input_email: {
    height: 50,
    width: 250,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    marginTop: 50,
  },
  input_password: {
    height: 50,
    width: 250,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    marginTop: 20,
  },
  button: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  texte: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  button_texte: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  },
});

export default Connexion;
