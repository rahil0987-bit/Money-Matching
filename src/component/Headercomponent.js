import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Headercomponent = () => {
  return (
    <View >
        <View style={{width:'100',height:150}}>
      <Image style={styles.miximg} source={require('../asstes/blue1.png')}/>
      <Image  style={styles.miximg2}source={require('../asstes/blue2.png')}/>
      <Image   style={styles.otpimg}source={require('../asstes/otpimg.png')}/>
      </View>
      
    </View>
  )
}

export default Headercomponent

const styles = StyleSheet.create({
    miximg:{
       width:'100%' ,
       resizeMode:'cover',
       height:"100%",zIndex:99 ,
    },
    miximg2:{
        width:'100%',
        resizeMode:'cover',
        height:'100%',
        position:'absolute',
        top:-30,
        right:40,
    borderWidth:100 ,
       
    },
    otpimg:{
        width:120,
        height:100,
        resizeMode:'cover',
        alignSelf:'center',
        marginTop:-40,
        right:3,
        zIndex:99,

    },
   



})