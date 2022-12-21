import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View  } from 'react-native';

import ItemList from './Src/Components/ListItem';
import TypeStatus from './Src/Components/TypeStatus';

const App = () => {

  const [char, setChar] = useState([])

  useEffect(()=>{
    async function FetchData(apiOne, ApiTwo, ApiThree) {
      const ResOne = await fetch(apiOne)
      const DataOne = await ResOne.json()

      const ResTwo = await fetch(ApiTwo)
      const DataTwo = await ResTwo.json()

      const ResThree = await fetch(ApiThree)
      const DataThree = await ResThree.json()

      const ArrayOne = DataOne.results
      const ArrayTwo = DataTwo.results
      const ArrayThree = DataThree.results

      const Array1 = ArrayOne.concat(ArrayTwo)
      const Array2 = Array1.concat(ArrayThree)

      setChar(Array2)
    }

    FetchData('https://rickandmortyapi.com/api/character', 'https://rickandmortyapi.com/api/character/?page=2', 'https://rickandmortyapi.com/api/character/?page=3')
  }, [])

  return (
    <SafeAreaView style={Styles.Page}>
      <TypeStatus />
      <FlatList 
        data={char}
        renderItem={({ item }) => <ItemList data={item}/>}
        keyExtractor={(item)=> item.id }
      />
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
 Page : {
  flex : 1,
 },

});

export default App;
