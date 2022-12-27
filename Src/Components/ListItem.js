import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

function ListItem(props) {

  const TaskConditionStyle = {
    textDecorationLine: props.data.done ? 'line-through' : 'none',
    color: props.data.done ? 'gray' : '#FFF'
  }

  const CheckedConditionStyle = {
    backgroundColor: props.data.done ? 'gray' : '#1C1C1C',
  }

  return(
    <TouchableHighlight underlayColor={'#1D1D1D'} activeOpacity={1} style={Styles.Item} onPress={() => props.toggleDone(props.i)}>
      <>
      <Text style={[Styles.ItemText, TaskConditionStyle]}>{props.data.task}</Text>
      <View style={[Styles.Check, CheckedConditionStyle]}></View>
      </>
    </TouchableHighlight>
  );
}

const Styles = StyleSheet.create({
  Item : {
    width : '100%',
    height : 50,
    paddingLeft : 15,
    paddingRight : 10,

    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',

    backgroundColor: '#1C1C1C'
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