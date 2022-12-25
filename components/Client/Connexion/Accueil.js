import React from 'react';
import {
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Ripple from 'react-native-material-ripple';

const Accueil = ({ navigation }) => {
  const boucle = (mot) => {
    let content = [];

    for (let i = 1; i < 21; i++) {
      content.push(
        <View style={styles.ligne} />,
          <Ripple>
            <Text style={styles.texte}>
              {mot} {i}
            </Text>
          </Ripple>
        
      );
    }

    return content;
  };

  const [text_x, setx] = React.useState(boucle('Favoris'));
  const [color1, setcolor1] = React.useState('#C4C4C4');
  const [color2, setcolor2] = React.useState('#E5E5E5');
  const [borde1, setborder1] = React.useState('1');
  const [borde2, setborder2] = React.useState('0');

  const onPressRecent = () => {
    setx(boucle('Récent'));
    setcolor2('#C4C4C4');
    setcolor1('#E5E5E5');
    setborder2('1');
    setborder1('0');
  };
  const onPressFavoris = () => {
    setx(boucle('Favoris'));
    setcolor1('#C4C4C4');
    setcolor2('#E5E5E5');
    setborder2('0');
    setborder1('1');
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <View style={{ flex: 1 }}>
        <Pressable
          style={{
            position: 'absolute',
            right: 0,
            flex: 1,
            marginRight: 20,
            marginTop: "10%",
          }}
          onPress={() => navigation.navigate("Menu", {expr: "Accueil"})}>
          <Image source={require('../../../assets/Menu.png')} />
        </Pressable>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', marginTop : 50}}>
        <View style={{ flex: 1, paddingRight: 25 }}>
          <Pressable
            style={{
              ...styles.input_and_button,
              backgroundColor: color1,
              borderWidth: parseInt(borde1),
            }}
            onPress={onPressFavoris}>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Favoris
            </Text>
          </Pressable>
        </View>

        <View style={{ flex: 1, paddingRight: 15 }}>
          <Pressable
            style={{
              ...styles.input_and_button,
              backgroundColor: color2,
              borderWidth: parseInt(borde2),
            }}
            onPress={onPressRecent}>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Récent
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{ flex: 4, paddingLeft: 23, paddingRight: 22 }}>
        <ScrollView>{text_x}</ScrollView>
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  input_and_button: {
    borderRadius: 15,
    padding: 10,
    marginTop: 0,
    marginLeft: 15,
  },
  ligne: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  texte: {
    fontSize: 24,
    marginTop: 21,
    marginBottom: 21,
  },
});

export default Accueil;
