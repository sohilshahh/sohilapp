import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const Textinput = ({placeholder}) => {
  return (
    <View>
      <Text style={{fontSize:30,color:'blue',alignSelf:'center' }}>baba MIRASI.com</Text>
      <TextInput style={styles.input} placeholder='Plzz Check Me'/> 
      <Text style={styles.txt2}>this site is very Gelchodi</Text>
      <Text style={{ fontSize:30,}}> navin loduu</Text>
    </View>
  )
}

export default Textinput

const styles = StyleSheet.create({
input:{
borderWidth:5,
borderColor:'black',
fontSize:30,
elevation:50,
alignSelf:'center',
color:'red',


},
txt2:{
  fontSize:30,
  fontStyle:'italic',
  color:'red',
}

})