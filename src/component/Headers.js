import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Headers = ({title}) => {
  const navigation = useNavigation()
  return (
    <View style={{width:'100%',height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:30}}>
      <TouchableOpacity onPress={()=>navigation?.goBack()}>
     <Image style={styles.backimg} source={require('../asstes/Back.png')} />

      </TouchableOpacity>
      <Text style={{fontSize:20,fontWeight:'700',color:'#FFFFFF'}}>{title}</Text>
      <View/>
    </View>
  )
}

export default Headers

const styles = StyleSheet.create({
    backimg: {
        width: 26,
        height: 26
      },
})