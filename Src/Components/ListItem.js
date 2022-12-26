import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function ListItem(props) {

  const TaskConditionStyle = {
    textDecorationLine: props.data.done ? 'line-through' : 'none',
    opacity: props.data.done ? 0.5 : 1
  }

  const CheckedConditionStyle = {
    backgroundColor: props.data.done ? 'gray' : '#1C1C1C',
  }

  return(
    <TouchableOpacity style={Styles.Item} onPress={() => props.toggleDone(props.i)}>
      <Text style={[Styles.ItemText, TaskConditionStyle]}>{props.data.task}</Text>
      <View style={[Styles.Check, CheckedConditionStyle]}></View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  Item : {
    width : '100%',
    height : 40,
    padding : 5,

    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },

  ItemText : {
    color : '#FFF',
    fontSize : 15,
    maxWidth : '90%'
  },

  Check : {
    width : 20,
    height : 20,
    borderRadius : 20,
    borderWidth : 2,
    borderColor : 'gray',
  }
})

export default ListItem;