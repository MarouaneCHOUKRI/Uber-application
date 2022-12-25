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
  Alert
} from 'react-native';
import { Dimensions } from 'react-native';
import Ripple from 'react-native-material-ripple';
import star from '../../../assets/Star.png'
import star1 from '../../../assets/Star1.png'

const Fin = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  
  const Star = require('../../../assets/Star.png')
  const Star1 = require('../../../assets/Star1.png')

  const image = { Star, Star1}

  const [selected0, setSelected0] = React.useState(image.Star)
  const [selected1, setSelected1] = React.useState(image.Star)
  const [selected2, setSelected2] = React.useState(image.Star)
  const [selected3, setSelected3] = React.useState(image.Star)
  const [selected4, setSelected4] = React.useState(image.Star)

  const Change = () => {
    setSelected1(image.Star);setSelected2(image.Star); setSelected3(image.Star); setSelected4(image.Star);setSelected0(image.Star1); 
  }

  const Change1 = () => {
    setSelected2(image.Star); setSelected3(image.Star); setSelected4(image.Star);setSelected0(image.Star1);setSelected1(image.Star1); 
  }

  const Change2 = () => {
    setSelected3(image.Star); setSelected4(image.Star);setSelected0(image.Star1);setSelected1(image.Star1); setSelected2(image.Star1); 
  }

  const Change3 = () => {
    setSelected4(image.Star);setSelected0(image.Star1);setSelected1(image.Star1); setSelected2(image.Star1);setSelected3(image.Star1)
  }

  const Change4 = () => {
    
    setSelected0(image.Star1);setSelected1(image.Star1); setSelected2(image.Star1); 
    setSelected3(image.Star1); 
    setSelected4(image.Star1);
  }

  const call = () =>{
    if(selected0 == image.Star1){
      Alert.alert('', 'Merci pour votre retour à bientôt !')
      navigation.reset({ index: 0, routes: [{ name: 'Aucune' }]}); 
    }
  }

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
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Noter la course</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>

      <View style={{flexDirection:"row", marginLeft: 23}}>
        <Pressable style={{flex: 1}} onPress={Change}>
              <Image 
                style={{marginTop: 179}}
                source={selected0} 
              />
        </Pressable>
        <Pressable style={{flex: 1}} onPress={Change1}>
              <Image 
                style={{marginTop: 179}}
                source={selected1}
              />
        </Pressable>
        <Pressable style={{flex: 1}} onPress={Change2}>
              <Image 
                style={{marginTop: 179}}
                source={selected2} 
              />
        </Pressable>
        <Pressable style={{flex: 1}} onPress={Change3}>
              <Image 
                style={{marginTop: 179}}
                source={selected3} 
              />
        </Pressable>
        <Pressable style={{flex: 1}} onPress={Change4}>
              <Image 
                style={{marginTop: 179}}
                source={selected4} 
              />
        </Pressable>
      </View>

      <View>
        <Ripple
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 15,
              padding: 8,
              marginLeft: 15,
              marginRight: 15,
              marginTop: 50
            }}
            onPress={call}>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Noter
            </Text>
          </Ripple>
          <Ripple
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 15,
              padding: 8,
              marginLeft: 15,
              marginRight: 15,
              marginTop: 30
            }}
            onPress={ () => {navigation.reset({ index: 0, routes: [{ name: 'Aucune' }]})} }>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Ignorer
            </Text>
          </Ripple>
      </View>
  
    </ScrollView>
  );
};

export default Fin;
