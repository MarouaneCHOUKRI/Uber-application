import React from 'react';
import {
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Ripple from 'react-native-material-ripple';

const Compte = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  const [text_nom, onChangeTextNom] = React.useState(null);
  const [text_prenom, onChangeTextPrenom] = React.useState(null);
  const [text_email, onChangeTextEmail] = React.useState(null);
  const [text_password1, onChangeTextPassword1] = React.useState(null);
  const [text_password2, onChangeTextPassword2] = React.useState(null);


  return (
    <ScrollView >
      
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
          <Text style={{fontSize: 36, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Mon compte</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>
      
      <Text style={{marginLeft: 20, marginTop: 23, fontSize: 24}}><B>Modifier mes informations</B></Text>

      <View style={{ jusifyContent: 'center', alignItems: 'center'}}>
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
            placeholder="email"
            keyboardType="default"
          />
          <TextInput
            style={{ ...styles.input, marginTop: 20 }}
            value={text_password1}
            onChangeText={onChangeTextPassword1}
            keyboardType="default"
            placeholder="mot de passe"
            secureTextEntry
          />
          <TextInput
            style={{ ...styles.input, marginTop: 20 }}
            value={text_password2}
            onChangeText={onChangeTextPassword2}
            placeholder="confirmez mdp"
            keyboardType="default"
            secureTextEntry
          />
          <Ripple style={{ ...styles.button, marginTop: 30, marginBottom: 45 }}>
            <Text style={{...styles.button_texte, fontSize: 24}}><B>Modifier</B></Text>
          </Ripple>
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 250,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    marginTop: 50,
  },
  button: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
   }
});

export default Compte;
