import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import List from './Src/List'
import ListItem from './Src/Components/ListItem';
import AddItemArea from './Src/Components/AddItemArea';

import uuid from 'react-native-uuid'

const App = () => {

  const [items, setItems] = useState(List)

  const onAdd = (txt) => {
    setItems([...items, { 
      task: txt.trim(), 
      done: false, 
      id: uuid.v4() 
    }])
  }

  const toggleDone = (index) => {
    let newItems = [...items]
    newItems[index].done = !newItems[index].done
    setItems(newItems)
  }

  return (
    <SafeAreaView style={Styles.Page}>
      <AddItemArea onAdd={onAdd} />

      <FlatList 
        data={items}
        renderItem={({item, index})=> <ListItem toggleDone={toggleDone} data={item} i={index}/>}
        keyExtractor={(item)=> item.id }
      />
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
 Page : {
  flex : 1,
    backgroundColor: '#1C1C1C'
 },

});

export default App;
