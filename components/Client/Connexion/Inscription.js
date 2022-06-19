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
import { NavigationContainer } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';

const PageInscription = ({ navigation: { goBack } }) => {
  const [text_nom, onChangeTextNom] = React.useState(null);
  const [text_prenom, onChangeTextPrenom] = React.useState(null);
  const [text_email, onChangeTextEmail] = React.useState(null);
  const [text_password1, onChangeTextPassword1] = React.useState(null);
  const [text_password2, onChangeTextPassword2] = React.useState(null);

  return (
    <ScrollView stickyHeaderIndices={[1]}>
      <StatusBar hidden />
      <View >
          <Pressable style={{ marginLeft: 15, marginTop: 35}} onPress={() => goBack()}>
            <Image
              style={{ height: 35, width: 35 }}
              source={require('../../../assets/fleche-gauche.png')}
            />
          </Pressable>
      </View>
      <View style={{ jusifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/user.png')}
            style={{ marginTop: 85, height: 150, width: 150}}
          />
          <Text style={styles.text_inscrivez_vous}>Inscrivez-vous</Text>
          <TextInput
            style={{ ...styles.input, marginTop: 50 }}
            value={text_nom}
            onChangeText={onChangeTextNom}
            placeholder="Nom"
            keyboardType="default"
          />
          <TextInput
            style={{ ...styles.input, marginTop: 20 }}
            value={text_prenom}
            onChangeText={onChangeTextPrenom}
            keyboardType="default"
            placeholder="Prénom"
          />
          <TextInput
            style={{ ...styles.input, marginTop: 20 }}
            value={text_email}
            onChangeText={onChangeTextEmail}
            placeholder="Email"
            keyboardType="default"
          />
          <TextInput
            style={{ ...styles.input, marginTop: 20 }}
            value={text_password1}
            onChangeText={onChangeTextPassword1}
            keyboardType="default"
            placeholder="Mot de passe"
            secureTextEntry
          />
          <TextInput
            style={{ ...styles.input, marginTop: 20 }}
            value={text_password2}
            onChangeText={onChangeTextPassword2}
            placeholder="Confirmez mdp"
            keyboardType="default"
            secureTextEntry
          />
          <Ripple style={{ ...styles.button, marginTop: 30, marginBottom: 45 }}
          rippleContainerBorderRadius={10}
          rippleColor='white'
          >
            <Text style={styles.button_texte}>Inscription</Text>
          </Ripple>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text_inscrivez_vous: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 35,
  },
  input: {
    height: 50,
    width: 250,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
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
  button_texte: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});

export default PageInscription;
