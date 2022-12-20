import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView  } from 'react-native';


const App = () => {

  const [repos, setRepos] = useState([])

  useEffect(()=>{
    const myFetch = async () => {
      const Res = await fetch('https://api.github.com/users/AbnerHenri/repos')
      const Data = await Res.json()

      setRepos(Data)
    }

    myFetch()
  }, [])

  function ShowLang(lang){
    switch (lang) {
      case 'JavaScript':
        return { color: '#e5e619'}

      case 'TypeScript':
        return {color: '#4040ff'}
      
      case 'Java': 
        return {color : 'orange'}

      case 'Python':
        return { color: '#6A5ACD'}
    
      default:
        break;
    }
  }

  return (
    <SafeAreaView style={Styles.Page}>
      <ScrollView style={Styles.FlatList}>
        {
          repos.map((e)=> 
            <Text style={Styles.ItemsList} key={e.name}>{e.name} - 
              <Text style={ShowLang(e.language)}> {e.language}</Text>
            </Text>
          )
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
 Page : {
  flex : 1,
 },

 FlatList : {
  flex : 1
 }, 

 ItemsList : {
  margin : 15,
  fontSize : 19,
 }
});

export default App;
