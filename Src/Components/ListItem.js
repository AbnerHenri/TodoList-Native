import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

function ItemList({ data }) {

  function StatusFunc(status){
    switch (status) {
      case 'Dead':
        return '#dd5035'
        
      case 'Alive':
        return '#77b26b'

      case 'unknown':
        return '#708090'
    
      default:
        break;
    }
  }

  return(
    <View style={Styles.Card}>
        <Text style={Styles.TextCard}>{data.name}</Text>
        <View style={Styles.Status}><View style={[Styles.SubStatus, { backgroundColor: StatusFunc(data.status) }]}></View></View>
    </View>
  );
}

const Styles = StyleSheet.create({
    Card : {
        padding : 15,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },

    TextCard : {
      fontSize : 20
    },

    Status : {
        width : 30,
        height : 30,
        borderRadius : 15,
      backgroundColor: '#dcdcdc',
        justifyContent : 'center',
        alignItems : 'center'
    },

    SubStatus : {
      width : 18,
      height : 18,
      borderRadius : 18,
    }
})

export default ItemList;