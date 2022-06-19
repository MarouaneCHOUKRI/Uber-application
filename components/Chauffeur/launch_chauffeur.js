import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Connexion from './Accueil/Connexion'
import Password from './Accueil/Password'
import Demande from './Accueil/Demande'
import Details from './Accueil/Details'
import Trajet from './Accueil/Trajet'
import Destination from "./Accueil/Destination"
import Arrive from "./Accueil/Arrive"

import Stats from "./Compte/Stats"
import Profil from "./Compte/Profil"

import DemandeAttentePlanifier from "./Course/DemandeAttente"
import DemandeAccepterPlanifier from "./Course/DemandeAccepte"
import Details_attente from "./Course/Attente"
import Details_accepte from "./Course/Accepte"

import Menu from './Menu'

const {Navigator, Screen} = createStackNavigator();

const options = { headerShown : false};

const Navigation = () => {

  return (
    <NavigationContainer>
      <Navigator>

        <Screen name='Connexion' component={Connexion} options={options}/>
        <Screen name="Password" component={Password} options={options}></Screen>
        <Screen name='Demande' component={Demande} options={options}/>
        <Screen name="Trajet" component={Trajet} options={options}></Screen>
        <Screen name="Destination" component={Destination} options={options}></Screen>
        <Screen name="Arrive" component={Arrive} options={options}></Screen>
        <Screen name="Details" component={Details} options={options}/>

        <Screen name="DemandeAttentePlanifier" component={DemandeAttentePlanifier} options={{...options, animationEnabled: false}}></Screen>
        <Screen name="DemandeAccepterPlanifier" component={DemandeAccepterPlanifier} options={{...options, animationEnabled: false}}></Screen>
        <Screen name="Details_attente" component={Details_attente} options={options}></Screen>
        <Screen name="Details_accepte" component={Details_accepte} options={options}></Screen>

        <Screen name="Stats" component={Stats} options={{...options, animationEnabled: false}}></Screen>
        <Screen name="Profil" component={Profil} options={{...options, animationEnabled: false}}></Screen>

        <Screen name="Menu" component={Menu} options={options}></Screen>

      </Navigator>
    </NavigationContainer>
  );
}

export default Navigation;