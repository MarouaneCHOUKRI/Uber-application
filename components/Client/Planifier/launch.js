import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from "./Accueil";
import AccueilPlanfication from "./AccueilPlanfication"
import Estimation from "./Estimation"
import Recherche from "./Recherche"
import Paiement from "./Paiement"
import Choix from "./Choix"
import Menu from "../Connexion/Menu"

const {Navigator, Screen} = createStackNavigator();

const headerHide = { headerShown : false };

const Navigation = () => {

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="AccueilPlanfication" component={AccueilPlanfication} options={headerHide}></Screen>
        <Screen name="Choix" component={Choix} options={headerHide}></Screen>
        <Screen name="Recherche" component={Recherche} options={headerHide}></Screen>
        <Screen name="Estimation" component={Estimation} options={headerHide}></Screen>
        <Screen name="Paiement" component={Paiement} options={headerHide}></Screen>
        <Screen name="Menu" component={Menu} options={headerHide}></Screen>
      </Navigator>
    </NavigationContainer>
  );

}

export default Navigation;