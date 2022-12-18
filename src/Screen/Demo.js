import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Demo = ({
  name,obj,
 
  onpress=()=>{}
  
}) => {
  
  let child={
    name:"abc",
    sub:"kuch nahi"
  }
  return (
    <View>
      <Text onpress={()=>(child)} style={{fontSize:50,color:"red"}}>{child.sub}</Text>
    </View>
  )
}

export default Demo;

const styles = StyleSheet.create({})