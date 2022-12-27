import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import Trash from '../Assets/bin.png'

function HiddenItem(props) {
  return(
    <TouchableHighlight style={Styles.Item} activeOpacity={1} onPress={()=> props.deleteItem(props.index)}>
      <Image source={Trash} style={Styles.Trash} />
    </TouchableHighlight>
  );
}

const Styles = StyleSheet.create({
    Item : {
        width : '100%',
        height : 50,
        backgroundColor : '#2D2D2D',

        flexDirection : 'row',
        alignItems: 'center',

        paddingLeft : 10,
    },

    Trash : {
      width : 30,
      height : 30,
    }
})

export default HiddenItem;