import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Headers = ({title}) => {
  return (
    <View style={{width:'100%',height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:30}}>
     <Image style={styles.backimg} source={require('../asstes/Back.png')} />
      <Text>{title}</Text>
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