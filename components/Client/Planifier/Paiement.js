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

const Paiement = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  const [text_date, setDate] = React.useState("")

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
              <Pressable onPress={() => navigation.navigate('Menu')} style={{alignItems: 'flex-end', marginRight: 20}}>

                <Image 
                  style={{marginTop: 30}}
                  source={require('../../../assets/Menu.png')} 
                />
              </Pressable>
            </View>

          </View>
        
        <View>
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Paiement</B></Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
        </View>

      </View>



      <View style={{paddingTop: 45}}>
        
        <View style={{marginLeft: 15, marginRight: 15}}>
          <TextInput
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            borderWidth: 1,
            borderRadius: 15,
            marginBottom: 30,
            padding: 8
          }}
          keyboardType="default"
          placeholder="Nom Prénom"
          />
          <TextInput
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            borderWidth: 1,
            borderRadius: 15,
            marginBottom: 30,
            padding: 8
          }}
          keyboardType="numeric"
          placeholder="Numéro de carte"
          maxLength={16}
          />
          <TextInput
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            borderWidth: 1,
            borderRadius: 15,
            marginBottom: 30,
            padding: 8
          }}
          keyboardType="numeric"
          placeholder="Date d'expiration"
          onChangeText={(text) => {
            setDate(
              text.length === 3 && !text.includes("/")
                ? `${text.substring(0, 2)}/${text.substring(2)}`
                : text
            );
          }}
          value={text_date}
          maxLength={5}
          />
          <TextInput
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            borderWidth: 1,
            borderRadius: 15,
            padding: 8
          }}
          keyboardType="numeric"
          placeholder="Cryptogramme"
          maxLength={3}
          />
        </View>
        
        <View>
            <Text style={{fontSize: 36, marginTop: 30, marginLeft:32, marginBottom: 43}}><B>Total :</B> XX€</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}}/>
        </View>
      </View>


      <View style={{paddingTop: 17, paddingBottom: 26}}>
      
        <View style={{marginLeft: 15, marginRight: 15}}>
          <Ripple
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 15,
              marginBottom: 17,
              padding: 8
            }}
            >
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Payer
            </Text>
          </Ripple>
          <Ripple
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 15,
              padding: 8
            }}
            onPress={() => navigation.goBack()}>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Annuler
            </Text>
          </Ripple>
        </View>
      
      </View>  

      
    </ScrollView>
  );
};

export default Paiement;
