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
import { Linking } from 'react-native';
import Ripple from 'react-native-material-ripple';

const Urgence = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
      <StatusBar hidden />
  
      <View>
        
        <View style={{flexDirection:"row"}}>
          <View style={{flex: 1}}/>
          <View style={{flex: 1}}>
            <Pressable onPress={() => navigation.navigate("Menu", {expr: "Course"})} style={{alignItems: 'flex-end', marginRight: 20}}>
              <Image 
                style={{marginTop: 30}}
                source={require('../../../assets/Menu.png')} 
              />
            </Pressable>
          </View>
        </View>
        
        <View>
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Urgences</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>

      <Text style={{fontSize: 24, marginLeft: 20, paddingTop: 30}}><B>Localisation actuelle</B></Text>

      <View style={{alignItems:'center', marginLeft: 15, marginRight: 15}}>          
          <Text style={{fontSize: 24, paddingTop: 83}}><B>Adresse : </B></Text>
          <Text style={{fontSize: 24, paddingTop: 83}}>Adresse complète actuelle</Text>
      </View>

      <Ripple
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 15,
              marginRight: 15,
              marginBottom: 118,
              marginLeft: 15,
              marginTop: 83,
              padding: 8
            }}
            onPress={() => Linking.openURL(`tel:17`)}>
            <Text
              style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
              Appeler
            </Text>
        </Ripple>
      
    </ScrollView>
  );
};


export default Urgence;
