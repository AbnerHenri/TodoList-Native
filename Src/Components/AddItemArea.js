import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native'

import uuid from 'react-native-uuid'

function AddItemArea(props) {

    const [item, setItem] = useState('')

    function handleSubmit(){
        if(item.trim() != ''){
            props.onAdd(item)
            setItem('')
        }
        
    }

  return(
    <View style={Styles.Area}>
        <TextInput 
           placeholder='Digite sua nova tarefa' 
           placeholderTextColor={'#DDD'}
           style={Styles.Input}
           value={item}
           onChangeText={(e)=> setItem(e)}
           onSubmitEditing={() => handleSubmit() }
           returnKeyType='send'
        />
    </View>
  );
}

const Styles = StyleSheet.create({
    Area : {
        padding : 12,
    },

    Input : {
        backgroundColor : 'gray',
        borderRadius : 12,
        padding : 15,
        color : '#FFF'
    }
})

export default AddItemArea;