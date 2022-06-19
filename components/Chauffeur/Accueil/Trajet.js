import React, { Component } from 'react'
import { StatusBar, Text, View, Image, ScrollView, Dimensions,
} from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {MapDark} from './Commun/StyleMap'
import {GOOGLE_MAPS_APIKEY} from './Commun/ApiKey'
import {styles, B} from './Commun/Global'
import Geocoder from 'react-native-geocoding';

class Trajet extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      view : <View style={{jusifyContent: 'center', alignItems: 'center'}}><Image style={{marginTop:  Dimensions.get('window').height / 5, height: 150, width: 150}}source={require('../../../assets/chargement.gif')} /></View>,
      latitude : null,
      longitude : null,
      heading: 0,
      temps: <View style={{jusifyContent: 'center', alignItems: 'center'}}><Image style={{height: 30, width: 30}}source={require('../../../assets/chargement.gif')} /></View>,
      distance: <View style={{jusifyContent: 'center', alignItems: 'center'}}><Image style={{height: 30, width: 30}}source={require('../../../assets/chargement.gif')} /></View>,
      latitude_position : this.props.route.params.Position.lat,
      longitude_position : this.props.route.params.Position.lng,
      heure: <View style={{jusifyContent: 'center', alignItems: 'center'}}><Image style={{height: 30, width: 30}}source={require('../../../assets/chargement.gif')} /></View>,
    }
    setInterval(async() => {this.change()}, 1000)
  }
  

  change(){

    (async () => {
      
        await Location.requestForegroundPermissionsAsync();
        let location = await Location.getCurrentPositionAsync({});
        this.setState({latitude: location.coords.latitude , longitude: location.coords.longitude, heading: location.coords.heading})
        this.setState({
          view: 
            <View>
              <MapView
              style={styles.map}
              showsCompass = {false}
              customMapStyle={MapDark}
              showsMyLocationButton	={false}
              ref={ref => { this.map = ref }}
              initialCamera = {{
                center: {
                   latitude: this.state.latitude,
                   longitude: this.state.longitude,
                },
                pitch: 0,
                heading: this.state.heading,
                altitude: 0,
                zoom: 17
              }}
              >
                <MapViewDirections
                  origin={{ latitude: this.state.latitude, longitude: this.state.longitude}}
                  destination={{latitude: this.state.latitude_position , longitude: this.state.longitude_position}}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={6}
                  resetOnChange={false}
                  strokeColor="#4784F1"
                  onReady={result => {
                    this.setState({temps: Math.round(result.duration)})
                    this.setState({distance: result.distance.toFixed(1)})
                    this.setState({heure: new Date(new Date().setMinutes(new Date().getMinutes() + this.state.temps)).toString().slice(16,21)})
                    this.map.animateCamera({
                      center: {
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                      },
                      pitch: 0,
                      heading: this.state.heading,
                      altitude: 0,
                      zoom: 17
                    },{ duration: 2000 });
                    if(result.distance.toFixed(2) < 0.02){
                      Geocoder.init(GOOGLE_MAPS_APIKEY);
                      Geocoder.from(this.props.route.params.Destination)
                      .then(json => {
                        var location = json.results[0].geometry.location;
                        this.props.navigation.reset({index: 0, routes: [{ name: 'Destination', params:{
                          destination : location
                        }}]})  
                      })
                      .catch(error => console.warn(error));
                    }
                  }}
                />

                <MapView.Marker 
                  coordinate={{latitude: this.state.latitude_position , longitude: this.state.longitude_position}}>
                </MapView.Marker>

                <MapView.Marker 
                  coordinate={{latitude: this.state.latitude , longitude: this.state.longitude}}>
                    <Image
                      style={{ height: 40, width: 40, transform: [{ rotate: '180deg' }]}}
                      source={require('../../../assets/voiture.png')}
                    />
                </MapView.Marker>

              </MapView>
              
              <View style={{flex: 1, flexDirection: 'row'}}>
                
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 18, textAlign: "center", marginTop: 22}}>{this.state.heure}</Text>
                  <Text style={{fontSize: 18, textAlign: "center"}}>arrivée</Text>
                </View> 

                <View style={{flex: 1}}>
                  <Text style={{fontSize: 18, textAlign: "center", marginTop: 22, borderLeftWidth: 1}}>{this.state.temps}</Text>
                <Text style={{fontSize: 18, textAlign: "center"}}>min</Text>
                </View>       
                
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 18, textAlign: "center", marginTop: 22, borderLeftWidth: 1}}>{this.state.distance}</Text>
                <Text style={{fontSize: 18, textAlign: "center"}}>km</Text>
                </View>        
              </View>

            </View>
          })
    })();
  }
  render(){
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: 'white'}}>
      
        <StatusBar hidden />
    
        <View>
          
          <View>
            <Text style={{fontSize: 34, marginLeft: 20, marginBottom: 60, marginTop: 51}}><B>Position Client</B></Text>
          </View>

          {this.state.view}
          
        </View>

      </ScrollView>
    )
  }
}
  
export default Trajet