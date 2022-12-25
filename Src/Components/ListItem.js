import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function ListItem({ task }) {
  return(
    <View style={Styles.Item}>
      <Text>{task}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  Item : {
    width : '100%',
    padding : 15,

  }
})

export default ListItem;