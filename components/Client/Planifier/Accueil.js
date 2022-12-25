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
  FlatList
} from 'react-native';
import { Dimensions } from 'react-native';
import Ripple from 'react-native-material-ripple';

const Accueil = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

  return (
    <ScrollView >
      
      <StatusBar hidden />
  
      <View>
                
          <View style={{flexDirection:"row"}}>
            
            <View style={{flex: 1}}/>
            <View style={{flex: 1}}>
              <Pressable onPress={() => navigation.navigate("Menu", {expr: "Planifier"})} style={{alignItems: 'flex-end', marginRight: 20}}>

                <Image 
                  style={{marginTop: 30}}
                  source={require('../../../assets/Menu.png')} 
                />
              </Pressable>
            </View>

          </View>
        
        <View>
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Mes planifications</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>



      <View style={{paddingTop: 183, paddingBottom: 321}}>
        
        <View style={{marginLeft: 38, marginRight: 37}}>
          <Text style={{fontSize: 36, textAlign: 'center'}}>Aucune course planifiée</Text>
        </View>
      
      </View>  

      <View>
        <Ripple
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 15,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 15,
              padding: 8
            }}
            onPress={() => navigation.navigate("Choix_Planification")}>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Planifier
            </Text>
          </Ripple>
      </View>

      
    </ScrollView>
  );
};

export default Accueil;
