import React from 'react';
import {
  StatusBar,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
} from 'react-native';

const Aucune = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  const [text_date, setDate] = React.useState("")

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
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Ma course</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>



      <View style={{paddingTop: 183, paddingBottom: 385}}>
        
        <View style={{marginLeft: 38, marginRight: 37}}>
          <Text style={{fontSize: 36, textAlign: 'center'}}>Aucune course en attente</Text>
        </View>
      
      </View>  

      
    </ScrollView>
  );
};

export default Aucune;
