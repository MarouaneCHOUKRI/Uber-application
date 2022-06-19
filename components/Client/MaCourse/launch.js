import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Aucune from "./Aucune";
import Attente from "./Attente"
import Fin from "./Fin"
import Arrive from "./Arrive"
import Pendant from "./Pendant"
import Menu from "./Menu"
import Urgence from "./Urgence"



const {Navigator, Screen} = createStackNavigator();

const headerHide = { headerShown : false };

const Navigation = () => {

  return (
    <NavigationContainer>
      <Navigator>
         <Screen name="Fin" component={Fin} options={headerHide}></Screen>
         <Screen name="Aucune" component={Aucune} options={headerHide}></Screen>
         <Screen name="Menu" component={Menu} options={headerHide}></Screen>
      </Navigator>
    </NavigationContainer>
  );

}

export default Navigation;

/*     <Screen name="Arrive" component={Arrive} options={headerHide}></Screen>
      <Screen name="Pendant" component={Pendant} options={headerHide}></Screen>
       <Screen name="Urgence" component={Urgence} options={headerHide}></Screen>

        <Screen name="Fin" component={Fin} options={headerHide}></Screen>
        <Screen name="Aucune" component={Aucune} options={headerHide}></Screen>
*/