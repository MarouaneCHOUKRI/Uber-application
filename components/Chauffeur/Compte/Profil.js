import React from 'react';
import { StatusBar, StyleSheet, Text, Pressable, View, Image, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native';
import { doc, onSnapshot } from "firebase/firestore";
import {onAuthStateChanged } from "firebase/auth";
import db from "../../firebase"
import {auth} from '../Global'

const Profil = ({ navigation }) => {

  const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
  const [view, setView] = React.useState(null);
  let isMounted = true;
  React.useEffect(() => {
    setView(<View style={{jusifyContent: 'center', alignItems: 'center' }}>
    <Image 
      style={{marginTop: 30, height: 80, width: 80}}
      source={require('../../../assets/chargement.gif')} 
    />
    </View>)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onSnapshot(doc(db, "Chauffeur", user.uid), (doc) => {
          if (isMounted) {
            try {
              setView(<View style={{ paddingTop: 20 }}>
                <Text style={{ marginLeft: 15, fontSize: 24, fontWeight: 'bold' }}>Mes informations</Text>
                <TextInput
                  style={{ ...styles.input, marginTop: 50, color: "gray" }}
                  value={doc.data().Nom}
                  showSoftInputOnFocus={false}
                />
                <TextInput
                  style={{ ...styles.input, marginTop: 20, color: "gray" }}
                  value={doc.data().Prénom}
                  showSoftInputOnFocus={false}
                />
                <TextInput
                  style={{ ...styles.input, marginTop: 20, color: "gray" }}
                  value={doc.data().Email}
                  showSoftInputOnFocus={false}
                />
                <TextInput
                  style={{ ...styles.input, marginTop: 20, color: "gray" }}
                  value={doc.data().Véhicule}
                  showSoftInputOnFocus={false}
                />
                <TextInput
                  style={{ ...styles.input, marginTop: 20, color: "gray" }}
                  value={doc.data().Plaque}
                  showSoftInputOnFocus={false}
                />
              </View>)
            }catch (error) {}
          }
        });
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]} style={{backgroundColor: 'white'}}>

      <StatusBar hidden />

      <View>

        <View style={{ flexDirection: "row", marginBottom: 49 }}>

          <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20 }}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Menu", {expr: "Compte"})}>

              <Image
                style={{ marginTop: 30 }}
                source={require('../../../assets/Menu.png')}
              />
            </TouchableWithoutFeedback>
          </View>

        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
            <Pressable onPress={() => { navigation.reset({ index: 0, routes: [{ name: 'Stats' }], }) }} style={{ backgroundColor: '#C4C4C4', marginRight: 94, height: 90, width: 90, borderRadius: 50, borderWidth: 0, borderColor: 'black' }}><Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 34 }}>Stats</Text></Pressable>
            <Pressable style={{ backgroundColor: '#C4C4C4', height: 90, width: 90, borderRadius: 50, borderWidth: 1, borderColor: 'black' }}><Text style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: 34 }}>Profil</Text></Pressable>
          </View>
        </View>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 15, marginRight: 15 }} />
      </View>

      <View style={{ paddingTop: 20, paddingBottom: 20 }}>
        {view}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    marginTop: 50,
    marginLeft: 63,
    marginRight: 62,

  },
  texte: {
    fontSize: 18
  }
});


export default Profil;