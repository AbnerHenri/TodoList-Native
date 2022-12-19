import React from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, Alert, TouchableOpacity } from 'react-native';


const App = () => {

  // const { width, height } = Dimensions.get('window')

  // function Alerting() {
  //   Alert.alert(
  //     'Título',
  //     `${width} x ${height}`,
  //     [
  //       { text: 'Ok', onPress: () => console.log('Concordado'), style: 'default' }
  //     ]
  //   )
  // }

  return (
    <SafeAreaView style={Styles.Page}>
        <TouchableOpacity style={Styles.Button}>
          <Text style={Styles.TextButton}>Mostrar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
 Page : {
  flex : 1,
  justifyContent : 'center',
  alignItems : 'center'
 },

 Button : {
  width : 200,
  padding : 18,
  backgroundColor : 'blue',
  justifyContent : 'center',
  alignItems : 'center',
  borderRadius : 35
 },

 TextButton : {
  color : 'white'
 }
});

export default App;
