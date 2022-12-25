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

const Arrive = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

  return (
    <ScrollView >
      
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
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Ma course</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>



      <View style={{paddingTop: 183, paddingBottom: 290}}>
        
        <View style={{marginLeft: 38, marginRight: 37}}>
          <Text style={{fontSize: 24, textAlign: 'center'}}>Une fois que vous êtes monté dans le véhicule cliquer sur <B>commencer</B></Text>
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
            onPress={() => navigation.navigate("Pendant")}>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              commencer
            </Text>
          </Ripple>
      </View>

      
    </ScrollView>
  );
};

export default Arrive;
