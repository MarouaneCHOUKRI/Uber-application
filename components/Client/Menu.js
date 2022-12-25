import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';

const Menu = ({ navigation, route}) => {

  const expr = route.params.expr;
  let isMounted = true;

  const [color_0, setColor_0] = React.useState('black');
  const [color_1, setColor_1] = React.useState('black');
  const [color_2, setColor_2] = React.useState('black');
  const [color_3, setColor_3] = React.useState('black');
  const [color_4, setColor_4] = React.useState('black');

  React.useEffect(() => {
    switch (expr) {
      case 'Accueil': setColor_0('white'); break;
      case 'Course': setColor_1('white'); break;
      case 'Planifier': setColor_2('white'); break;
      case 'Compte': setColor_3('white'); break;
      case 'Commande': setColor_4('white'); break;
    }  
    return () => {
      isMounted = false;
    };
  }, []);

  if( color_0=="white" || color_1=="white" || color_2=="white" || color_3=="white" || color_4=="white" ){
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
  
        <View style={{ jusifyContent: 'center', alignItems: 'center', marginTop: 30}}>

          <Pressable style={{ marginTop: 118.52, marginBottom: 30 }} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Accueil' }], })}>
            <Text style={{...styles.text, color: color_0 }}>Accueil</Text>
          </Pressable>

          <View style={{borderBottomColor: 'black', borderWidth: 0.3, width: 250}}></View>
          
          <Pressable style={{ marginTop: 20, marginBottom: 30 }} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Recherche' }], })}>
            <Text style={{...styles.text, color: color_4 }}>Commande</Text>
          </Pressable>

          <View style={{borderBottomColor: 'black', borderWidth: 0.3, width: 250}}></View>
          
          <Pressable style={{ marginTop: 20, marginBottom: 30 }} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Attente' }], })}>
            <Text style={{...styles.text, color: color_1 }}>Ma course</Text>
          </Pressable>

          <View style={{borderBottomColor: 'black', borderWidth: 0.3, width: 250}}></View>
          
          <Pressable style={{ marginTop: 20, marginBottom: 30 }} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'AccueilPlanfication' }], })}>
            <Text style={{...styles.text, color: color_2 }}>Planifier</Text>
          </Pressable>

          <View style={{borderBottomColor: 'black', borderWidth: 0.3, width: 250}}></View>

          <Pressable style={{ marginTop: 20, marginBottom: 30 }} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Compte' }] })}>
            <Text style={{...styles.text, color: color_3 }}>Compte</Text>
          </Pressable>

          <View style={{borderBottomColor: 'black', borderWidth: 0.3, width: 250}}></View>

          <Pressable
            style={{ marginTop: 20, marginBottom: 185 }} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Connexion' }] })}>
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
