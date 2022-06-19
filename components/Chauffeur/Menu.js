import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import { signOut } from "firebase/auth";
import {auth} from './Global'


const Menu = ({ navigation, route}) => {
  
  function singOut(){
    signOut(auth).then(() => { 
      console.log("Compte-Menu : Déconnexion réussi")
    }).catch((error) => {
      console.log("Compte-Menu : Déconnexion echoué")
    });
  }
  
  function go_to_connexion(){
    navigation.reset({ index: 0, routes: [{ name: 'Connexion' }], })
  }

  const expr = route.params.expr;
  let isMounted = true;

  const [color_0, setColor_0] = React.useState('black');
  const [color_1, setColor_1] = React.useState('black');
  const [color_2, setColor_2] = React.useState('black');

  React.useEffect(() => {
    switch (expr) {
      case 'Accueil': setColor_0('white'); break;
      case 'Planifier': setColor_1('white'); break;
      case 'Compte': setColor_2('white'); break;
    }  
    return () => {
      isMounted = false;
    };
  }, []);

  if(color_0=="white" || color_1=="white" || color_2=="white"){
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
              source={require('../../assets/fermer.png')}
            />
          </Pressable>
        </View>
  
        <View style={{ jusifyContent: 'center', alignItems: 'center', flex: 9.5 }}>
          <Pressable style={{ marginTop: 118.52, marginBottom: 30 }} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Demande' }], })}>
            <Text style={{...styles.text, color: color_0 }} >Accueil</Text>
          </Pressable>

          <View style={{borderBottomColor: 'black', borderWidth: 0.3, width: 250}}></View>
          
          <Pressable style={{ marginTop: 20, marginBottom: 30 }} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'DemandeAttentePlanifier' }], })}>
            <Text style={{...styles.text, color: color_1 }}>Planifier</Text>
          </Pressable>

          <View style={{borderBottomColor: 'black', borderWidth: 0.3, width: 250}}></View>

          <Pressable style={{ marginTop: 20, marginBottom: 30 }} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Stats' }] })}>
            <Text style={{...styles.text, color: color_2 }}>Compte</Text>
          </Pressable>

          <View style={{borderBottomColor: 'black', borderWidth: 0.3, width: 250}}></View>

          <Pressable
            style={{ marginTop: 20, marginBottom: 185 }} onPress={() => {singOut(); go_to_connexion()}}>
            <Text style={styles.text}>Déconnexion</Text>
          </Pressable>
        </View>
      </View>
    );
  }else{
    return <Text></Text>
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default Menu;
