import React from 'react';
import {StatusBar, StyleSheet, TextInput, Text, Image, ScrollView, View, TouchableWithoutFeedback } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { sendPasswordResetEmail} from "firebase/auth";
import validator from 'validator';
import '../../firebase'
import {auth} from '../Global'
  

const Password = ({ navigation }) => {

  const [text_email, onChangeTextEmail] = React.useState("");
  const [button, setButton] = React.useState(false);
  const [erreur, setErreur] = React.useState(null);
  const [margin, setMargin] = React.useState(260);

  function focus(){
    setButton(false); setErreur(null); setMargin(260)
  }

  function Reset () {

    setButton(true)
    if(text_email==""){
      setMargin(219)
      setErreur(<View style= {{padding: 5}}><Text style={{color: 'white', fontWeight: 'bold', 
      backgroundColor: '#DC143C', padding: 5, textAlign: 'center'}}>Champ email vide</Text></View>)

    }else if(!validator.isEmail(text_email)){
      setMargin(219)
      setErreur(<View style= {{padding: 5}}><Text style={{color: 'white', fontWeight: 'bold', 
      backgroundColor: '#DC143C', padding: 5, textAlign: 'center'}}>Adresse mail non valide</Text></View>)

    }else{
      sendPasswordResetEmail(auth, text_email)
      .then(() => {
        setMargin(200)
        setErreur(<View style= {{padding: 5}}><Text style={{color: 'white', fontWeight: 'bold', 
        backgroundColor: '#14dc82', padding: 5, textAlign: 'center'}}>Un mail vous a été envoyé pour réinitialiser votre mot de passe.</Text></View>)
      
      })
      .catch((error) => {
        setMargin(219)
        setErreur(<View style= {{padding: 5}}><Text style={{color: 'white', fontWeight: 'bold', 
        backgroundColor: '#DC143C', padding: 5, textAlign: 'center'}}>Échec de l'envoi du mail.</Text></View>)

      });
    }
  }
  
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <StatusBar hidden />
      {erreur}
      <View>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Image 
            style={{ height: 30, width: 30, marginLeft: 15, marginTop: 20}}
            source={require('../../../assets/fleche-gauche.png')}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ jusifyContent: 'center', alignItems: 'center', marginTop: margin}}>
        <Text style={styles.text}>Entrez votre adresse email</Text>
        <TextInput
          style={styles.input_email}
          value={text_email}
          placeholder="Email"
          onChangeText={newText => onChangeTextEmail(newText)}
          keyboardType="email-address"
          color= 'black'
          placeholderTextColor="black"
          onFocus={()=> focus()}
        />
        <Ripple
          style={{ ...styles.button, marginTop: 25 }}
          rippleContainerBorderRadius={10}
          rippleColor='white'
          disabled={button}
          onPress={() => {
            Reset();
          }}>
          <Text style={styles.button_texte}>Envoyer</Text>
        </Ripple>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: 35,
    fontWeight: 'bold'
  },
  input_email: {
    height: 50,
    width: 250,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    padding: 5,
    marginTop: 50,
    fontWeight: 'bold',
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Password;
