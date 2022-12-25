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

const Recherche = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  const [text_date, setDate] = React.useState("")
  const [text_depart, onChangeTextDepart] = React.useState(null);
  const [text_destination, onChangeTextDestination] = React.useState(null);

  const boucle = () => {
    let content = [];

    for (let i = 1; i < 7; i++) {
      content.push(
        <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}} />,
        <Ripple>
          <Text style={{fontSize: 24,marginTop: 21,marginBottom: 21,}}>
            Destination {i}
          </Text>
        </Ripple>
      );
    }

    return content;
  };
  
  const [text_x, setx] = React.useState(boucle());

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      
      <StatusBar hidden />
  
      <View>
                
          <View style={{flexDirection:"row"}}>
            
            <View style={{flex: 1}}>
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  style={{ height: 30, width: 30, marginLeft: 15, marginTop: 20}}
                  source={require('../../../assets/fleche-gauche.png')}
                />
              </Pressable>
            </View>
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
          <TextInput
            style={{
            marginTop: 43, fontSize: 24,
            fontWeight: 'bold',
            borderWidth: 1,
            borderRadius: 15,
            padding: 8,
            marginLeft: 15,
            marginRight: 15
            }}
            value={text_depart}
            onChangeText={onChangeTextDepart}
            keyboardType="default"
            placeholder="Départ"
            placeholderTextColor="#000" 
          />
          <TextInput
            style={{
            marginTop: 20, fontSize: 24,
            fontWeight: 'bold',
            borderWidth: 1,
            borderRadius: 15,
            padding: 8,
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 28
            }}
            value={text_destination}
            onChangeText={onChangeTextDestination}
            placeholder="Destination"
            keyboardType="default"
            placeholderTextColor="#000" 
          />
        </View>

      </View>

      <View style={{paddingLeft: 23, paddingRight: 22 }}>
        {text_x}
        <View style={{borderBottomColor: 'black',borderBottomWidth: 1,}} />
      </View>

      <TextInput
            style={{
            marginTop: 20, fontSize: 24,
            fontWeight: 'bold',
            borderWidth: 1,
            borderRadius: 15,
            padding: 8,
            marginLeft: 15,
            marginRight: 15
            }}
            onChangeText={(text) => {
            setDate(
              text.length === 3 && !text.includes("/")
                ? `${text.substring(0, 2)}/${text.substring(2)}`
                : text
            );
            }}
            value={text_date}
            maxLength={5}
            placeholder="Choix date"
            keyboardType="numeric"
            placeholderTextColor="#000" 
      />

      <View style={{paddingTop: 17, paddingBottom: 26}}>
      
        <View style={{marginLeft: 15, marginRight: 15}}>
          <Ripple
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 15,
              padding: 8
            }}
            onPress={() => navigation.navigate("Estimation_Planification")}>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Valider
            </Text>
          </Ripple>
        </View>
      
      </View>  

      
    </ScrollView>
  );
};
export default Recherche;
