import React from 'react';
import {
  StatusBar,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import Ripple from 'react-native-material-ripple';

const AccueilPlanfication = ({ navigation }) => {

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  const [showBox, setShowBox] = React.useState(true);

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
            <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Mes planifications</B></Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15}} />
          </View>

      </View>



      <View style={{ flex: 1, borderColor: 'black', borderWidth: 1, borderRadius: 15, marginBottom: 20, marginLeft: 15, marginTop: 30, marginRight: 15}}>
            
            <View style={{ flex: 1, flexDirection: 'row'}}>
            
              <View style={{
              width: 80,
              height: 76,
              marginLeft: 10,
              marginTop: 10, 
              borderWidth: 1,
              margin: 0,
              backgroundColor: '#C4C4C4',
              borderColor: '#C4C4C4',
              }}
              />

              <View style={{marginLeft: 19, marginTop: 10}}>
                <Text><B>Chauffeur :</B> Nom Prénom</Text>
                <Text><B>Véhicule :</B> nom</Text>
                <Text><B>Plaque :</B> XXXX-XXXX</Text>
              </View>

            </View>


            <View style={{paddingLeft: 10, paddingTop: 20}}>

              <View style={{ flex: 1, flexDirection: 'row'}}>
            
                <View style={{flex: 2}}>
                  <Text style={{fontSize: 18, paddingBottom: 20}}><B>Date :</B> XX/XX </Text>
                </View>

              </View>

              <View style={{ flex: 1, flexDirection: 'row', paddingRight: 10, paddingBottom: 10}}>

                <View style={{flex: 2}}>
                  <Text style={{fontSize: 18}}><B>Heure :</B> XXH XXmin </Text>
                </View>
                
                <View>
                
                  <Ripple
                    style={{                 

                      backgroundColor: '#C4C4C4',
                      borderRadius: 15,
                      width: 100,
                      height: 30                  
                    }}
                    onPress={() => Alert.alert("","Êtes vous sûr de vouloirs annuler cette planification ?",[{text: "OUI", onPress: () => {setShowBox(false);},},{text: "NON",},])}>
                    <Text
                      style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
                      Annuler
                    </Text>
                  </Ripple>
                </View>
              </View>
            
            </View>
      </View>

      <View style={{paddingTop: 336}}>
        <Ripple
            style={{
              backgroundColor: '#C4C4C4',
              borderRadius: 15,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 15,
              padding: 8
            }}
            onPress={() => navigation.navigate("Recherche")}>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Planifier
            </Text>
          </Ripple>
      </View>
      
    </ScrollView>
  );
};

export default AccueilPlanfication;
