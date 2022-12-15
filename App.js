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
