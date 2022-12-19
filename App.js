import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Button } from 'native-base'


const App = () => {

  // const { width, height } = Dimensions.get('window')

  // function Alerting() {
  //   Alert.alert(
  //     'Título',
  //     `${width} x ${height}`,
  //     [
  //       { text: 'Concordo', onPress: () => console.log('Concordado'), style: 'default' },
  //       { text: 'Não concordo', onPress: () => console.log('Não concordado') }
  //     ]
  //   )
  // }

  return (
    <SafeAreaView style={Styles.Page}>
          <Text>Mostrar</Text>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
 Page : {
  flex : 1,
 }
});

export default App;
