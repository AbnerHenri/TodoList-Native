import React from 'react';
import { useEffect } from 'react';
import { SafeAreaView, Text, } from 'react-native';



const App = () => {

  return (
    <SafeAreaView style={Styles.Page}>
      <Text>App</Text>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
 Page : {
  flex : 1
 }
});

export default App;
