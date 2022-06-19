import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import Menu from "./Menu";
import Accueil from "./Accueil";


const {Navigator, Screen} = createStackNavigator();

const headerHide = { headerShown : false };

const Navigation = () => {

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Connexion" component={Connexion} options={headerHide}></Screen>
        <Screen name="Inscription" component={Inscription} options={headerHide}></Screen>
        <Screen name="Menu" component={Menu} options={headerHide}></Screen>
        <Screen name="Accueil" component={Accueil} options={headerHide}></Screen>
      </Navigator>
    </NavigationContainer>
  );

}

export default Navigation;
