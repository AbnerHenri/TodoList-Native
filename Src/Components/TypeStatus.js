import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function TypeStatus() {
  return(
    <View style={Styles.Container}>
        <Text style={Styles.Title}>Status</Text>
 
        <View style={Styles.Status}>
            <Text style={Styles.Alive}>Alive</Text>
            <Text style={Styles.Dead}>Dead</Text>
            <Text style={Styles.Unknown}>Unknown</Text>
        </View> 
    </View>
  );
}

const Styles = StyleSheet.create({
    Container : {
        width : '100%',
        height : 200,
        justifyContent : 'space-around',
        alignItems : 'center'
    },

    Title : {
        fontSize : 25
    },

    Status : {
        width : '85%',
        paddingBottom : 50,
        borderBottomColor: '#808080',
        borderBottomWidth : 2,
        flexDirection : 'row',
        justifyContent : 'space-around'
    },

    Alive : {
        fontSize: 15,
        borderLeftColor: '#77b26b',
        borderLeftWidth : 5,
        padding : 10,
    },

    Dead : {
        fontSize: 15,
        borderLeftColor: '#dd5035',
        borderLeftWidth: 5,
        padding: 10,
    },

    Unknown : {
        fontSize: 15,
        borderLeftColor: '#708090',
        borderLeftWidth: 5,
        padding: 10,
    },
})

export default TypeStatus;