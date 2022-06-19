import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Compte from './Compte'

const {Navigator, Screen} = createStackNavigator();

const headerHide = { headerShown : false };

const Navigation = () => {

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Compte" component={Compte} options={headerHide}></Screen>
      </Navigator>
    </NavigationContainer>
  );

}

export default Navigation;