import React from 'react';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text,} from 'react-native';



const App = () => {

  const { width, height } = Dimensions.get('window')

  useEffect(()=>{
    Alert.alert(
      'Título',
      `${width} x ${height}`,
      [
        { text: 'Concordo', onPress: () => console.log('Concordado'), style: 'destructive' },
        { text: 'Não concordo', onPress: () => console.log('Não concordado') }
      ]
    )
  }, [])

  return (
    <SafeAreaView style={Styles.Page}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
 Page : {
  flex : 1
 }
});

export default App;
