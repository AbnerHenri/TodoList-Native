import React, {  } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import { List } from './Src/List'
import ListItem from './Src/Components/ListItem';

const App = () => {

  return (
    <SafeAreaView style={Styles.Page}>
      <FlatList 
        data={List}
        renderItem={({item})=> <ListItem task={item}/>}
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
