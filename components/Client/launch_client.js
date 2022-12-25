import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Recherche from "./Commande/Recherche";
import Choix from "./Commande/Choix";
import Paiement from "./Commande/Paiement";
import Estimation from "./Commande/Estimation";

import Compte from './Compte/Compte'

import Connexion from "./Connexion/Connexion";
import Inscription from "./Connexion/Inscription";
import Accueil from "./Connexion/Accueil";

import Aucune from "./MaCourse/Aucune";
import Fin from "./MaCourse/Fin"
import Attente from "./MaCourse/Attente"

import AccueilPlanfication from "./Planifier/AccueilPlanfication"
import Estimation_Planification from "./Planifier/Estimation"
import Recherche_Planification from "./Planifier/Recherche"
import Paiement_Planification from "./Planifier/Paiement"
import Choix_Planification from "./Planifier/Choix"

import Menu from './Menu'



const {Navigator, Screen} = createStackNavigator();

const options = { headerShown : false};

const Navigation = () => {

  return (
    <NavigationContainer>
      <Navigator>

        <Screen name="Recherche" component={Recherche} options={options}></Screen>
        <Screen name="Choix" component={Choix} options={options}></Screen>
        <Screen name="Paiement" component={Paiement} options={options}></Screen>
        <Screen name="Estimation" component={Estimation} options={options}></Screen>

        <Screen name="Connexion" component={Connexion} options={options}></Screen>
        <Screen name="Inscription" component={Inscription} options={options}></Screen>
        <Screen name="Accueil" component={Accueil} options={options}></Screen>

        <Screen name="Compte" component={Compte} options={options}></Screen>

        <Screen name="Attente" component={Attente} options={options}></Screen>
        <Screen name="Aucune" component={Aucune} options={options}></Screen>

        <Screen name="AccueilPlanfication" component={AccueilPlanfication} options={options}></Screen>
        <Screen name="Choix_Planification" component={Choix_Planification} options={options}></Screen>
        <Screen name="Recherche_Planification" component={Recherche_Planification} options={options}></Screen>
        <Screen name="Estimation_Planification" component={Estimation_Planification} options={options}></Screen>
        <Screen name="Paiement_Planification" component={Paiement_Planification} options={options}></Screen>

        <Screen name="Menu" component={Menu} options={options}></Screen>

      </Navigator>
    </NavigationContainer>
  );
}

export default Navigation;