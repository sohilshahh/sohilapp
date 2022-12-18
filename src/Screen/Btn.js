import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Btn = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={{backgroundColor:'red',height:50,width:100,color:'white',alignSelf:'center',margin:30, fontSize:40}}>Addd</Text>
      </TouchableOpacity>
      </View>
  )
}

export default Btn

const styles = StyleSheet.create({})