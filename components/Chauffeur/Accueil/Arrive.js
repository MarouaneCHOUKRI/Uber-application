import React, { Component } from 'react'
import {
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native';
import MapView from 'react-native-maps';
import Ripple from 'react-native-material-ripple';
import {MapDark} from './Commun/StyleMap'
import {B, styles} from './Commun/Global'

class Arrive extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      latitude : this.props.route.params.Arrive.lat,
      longitude : this.props.route.params.Arrive.lng,
    }
  }

  render(){
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: 'white'}}>
      
      <StatusBar hidden />
  
      <View>
        
        <View>
          <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Arrivée</B></Text>
        </View>

      </View>
    
      <View style={styles.container}>

        <MapView
          style={styles.map}
          customMapStyle={MapDark}
          initialRegion={{ 
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }} 
          >
          <MapView.Marker
                coordinate={{latitude: this.state.latitude, longitude: this.state.longitude}}> 
          </MapView.Marker>
        </MapView>

      </View>

      <View>
        
        <Ripple
          style={{
            backgroundColor: 'black',
            borderRadius: 10,
            padding: 8,
            marginBottom: 26,
            marginLeft: 15,
            marginRight: 15,
            marginTop: 22,
          }}
          onPress={() => this.props.navigation.reset({ index: 0, routes: [{ name: 'Demande'}]})}
          rippleContainerBorderRadius={10} rippleColor='white'>
          <Text
            style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'white'}}>
            Terminé
          </Text>
        </Ripple>

      </View>
      </ScrollView>
    )
  }
}

export default Arrive