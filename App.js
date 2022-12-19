import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, Alert, TouchableOpacity } from 'react-native';


const App = () => {

  const { width, height } = Dimensions.get('window')

  const Alerting = () => {
    Alert.alert(
      'Título',
      `${width} x ${height}`,
      [
        { text: 'Ok' }
      ]
    )
  }

  return (
    <SafeAreaView style={Styles.Page}>
        <TouchableOpacity style={Styles.Button}>
          <Text style={Styles.TextButton} onPress={Alerting}>Mostrar</Text>
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
