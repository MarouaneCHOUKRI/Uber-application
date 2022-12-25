import React from 'react';
import { StatusBar, StyleSheet, TextInput, Text, Image, ScrollView, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import { signInWithEmailAndPassword } from "firebase/auth";
import validator from 'validator';
import '../../firebase'
import { doc, getDoc, setDoc} from "firebase/firestore";
import { signOut} from "firebase/auth";
import { auth } from '../Global'
import db from "../../firebase"

const Connexion = ({ navigation }) => {

  const [text_email, onChangeTextEmail] = React.useState("");
  const [text_password, onChangeTextPassword] = React.useState("");
  const [button, setButton] = React.useState(false);
  const [erreur, setErreur] = React.useState(null);
  const [margin, setMargin] = React.useState(150);

  function focus(){
    setButton(false); setErreur(null); setMargin(150)
  }

  function Login () {
    
    setButton(true)
    if(text_email.toString() == ""){
      setMargin(109)
      setErreur(<View style= {{padding: 5}}><Text style={{color: 'white', fontWeight: 'bold', 
      backgroundColor: '#DC143C', padding: 5, textAlign: 'center'}}>Champ email vide.</Text></View>)

    }else if(!validator.isEmail(text_email.toString())){
      setMargin(109)
      setErreur(<View style= {{padding: 5}}><Text style={{color: 'white', fontWeight: 'bold', 
      backgroundColor: '#DC143C', padding: 5, textAlign: 'center'}}>Adresse mail non valide.</Text></View>)

    }else if(text_password.toString()==""){
      setMargin(109)
      setErreur(<View style= {{padding: 5}}><Text style={{color: 'white', fontWeight: 'bold', 
      backgroundColor: '#DC143C', padding: 5, textAlign: 'center'}}>Champ mot de passe vide.</Text></View>)

    }else if(text_password.toString().length < 6){
      setMargin(109)
      setErreur(<View style= {{padding: 5}}><Text style={{color: 'white', fontWeight: 'bold', 
      backgroundColor: '#DC143C', padding: 5, textAlign: 'center'}}>Mot de passe inférieure à 6 caractères.</Text></View>)

    }else{
      
      signInWithEmailAndPassword(auth, text_email.toString(), text_password.toString())
      .then((userCredential) => {
        navigation.reset({ index: 0, routes: [{ name: 'Demande' }]})   
      })
      .catch((error) => {
        onChangeTextEmail("")
        onChangeTextPassword("")
        setMargin(109); setErreur(<View style= {{padding: 5}}><Text style={{color: 'white', fontWeight: 'bold', 
          backgroundColor: '#DC143C', padding: 5, textAlign: 'center'}}>Échec de la connexion.</Text></View>)     
      }); 

    }
  }


  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <StatusBar hidden />
      {erreur}
      <View style={{ jusifyContent: 'center', alignItems: 'center' }}>

        <Image
          style={{marginTop: margin, height: 180, width: 180}}
          source={require('../../../assets/user.png')}
        />

        <Text style={styles.text_connectez_vous}>Connectez-vous</Text>
        <TextInput
          style={styles.input_email}
          value={text_email}
          placeholder="Email"
          onChangeText={newText => onChangeTextEmail(newText)}
          keyboardType="email-address"
          onFocus={()=> focus()}
          color= 'black'
          placeholderTextColor="black" 
        />
        <TextInput
          style={styles.input_password}
          value={text_password}
          onChangeText={newText => onChangeTextPassword(newText)}
          placeholder="Mot de passe"
          keyboardType="default"
          secureTextEntry
          color= 'black'
          onFocus={()=> focus()}
          placeholderTextColor="black" 
        />
        <Ripple
          style={{ ...styles.button, marginTop: 20 }}
          rippleContainerBorderRadius={10}
          rippleColor='white'
          onPress={() => {
            Login();
          }}
          disabled={button}
          >
          <Text style={styles.button_texte}>Connexion</Text>
        </Ripple>
        <Text style={styles.texte} 
          onPress={ () => {
            focus()
            navigation.navigate('Password')
          }}
          >
          mot de passe oublié ?
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text_connectez_vous: {
    fontSize: 27,
    marginTop: 35,
    color: 'black',
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
    fontWeight: 'bold'
  },
  input_password: {
    height: 50,
    width: 250,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    padding: 5,
    marginTop: 20,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    width: 250,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black'
  },
  texte: {
    marginTop: 10,
    color: 'black',
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  button_texte: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
});

export default Connexion;


/* L'accès à ce compte a été temporairement désactivé en raison de nombreuses tentatives de connexion infructueuses. Vous pouvez le rétablir immédiatement en réinitialisant votre mot de passe ou vous pouvez réessayer plus tard. */