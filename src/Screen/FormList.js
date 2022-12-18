import {FlatList,StyleSheet,View, Text } from 'react-native'
import React from 'react'

const FormList = ({route, navigation}) => {
    let data = route.params
    console.log("=====3456====>",route.params);
    return (
      <View style={{ flex:1, paddingHorizontal:8}}>
        {/* <onPress {() => navigation.navigate('From')} style={{alingSelf: 'flex-end' }}title='Add'/> */}
      <View style={{ flex:1,justifyContent:'center'}}>
      <Text style={{ fontSize:30, alignSelf:'center', color:'#000'}}>(data.para)</Text>
      </View>
      </View>
    )
  }

export default FormList
const styles =StyleSheet.create({})