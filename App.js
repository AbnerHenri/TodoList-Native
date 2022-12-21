import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList  } from 'react-native';


const App = () => {

  const [char, setChar] = useState([])

  useEffect(()=>{
    async function FetchData(api) {
      const Res = await fetch(api)
      const Data = await Res.json()

      setChar(Data)
    }

    FetchData('https://rickandmortyapi.com/api/character')
  }, [])

  return (
    <SafeAreaView style={Styles.Page}>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
 Page : {
  flex : 1,
 },

 FlatList : {
  flex : 1
 }, 

});

export default App;
