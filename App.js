import React from 'react';
import { useEffect } from 'react';
import {
  SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  // useColorScheme,
  // View,
  Dimensions,
  Alert,
} from 'react-native';



const App = () => {

  const { width, height } = Dimensions.get('window')

  useEffect(()=>{
    Alert.alert(
      'Título',
      'Testando o Alert do React-Native',
      [
        { text: 'Concordo', onPress: () => console.log('Concordado') },
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
