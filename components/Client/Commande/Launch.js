import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Recherche from "./Recherche";
import Choix from "./Choix";
import Paiement from "./Paiement";
import Menu from "../Connexion/Menu";
import Estimation from "./Estimation";


const {Navigator, Screen} = createStackNavigator();

const headerHide = { headerShown : false };

const Navigation = () => {

  return (
    <NavigationContainer>
      <Navigator>
         <Screen name="Recherche" component={Recherche} options={headerHide}></Screen>
         <Screen name="Choix" component={Choix} options={headerHide}></Screen>
        <Screen name="Paiement" component={Paiement} options={headerHide}></Screen>
        <Screen name="Estimation" component={Estimation} options={headerHide}></Screen>
        <Screen name="Menu" component={Menu} options={headerHide}></Screen>
      </Navigator>
    </NavigationContainer>
  );

}

export default Navigation;
