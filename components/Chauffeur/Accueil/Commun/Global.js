import {StyleSheet, Dimensions, Text} from 'react-native'; 

export const styles = StyleSheet.create({
  text:{
    fontSize: 24,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/1.4,
  },
});

export const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
