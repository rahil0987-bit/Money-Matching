import { StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
// import  {useState} from 'react'
import Headers from '../../component/Headers'
import LinearGradient from 'react-native-linear-gradient';
import { CountryPicker } from "react-native-country-codes-picker";
import { useState } from 'react'
import OtpVerifiction from '../OtpVerifiction';
import { useNavigation } from '@react-navigation/native';
// import { red } from 'react-native-reanimated/lib/typescript/Colors';



const Dashbord = () => {
  const navigation=useNavigation();
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlesend=()=>{
    
    navigation.navigate('OtpVerifiction',{phoneNumber})
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
      <LinearGradient colors={['#133A72', '#1873B9']} style={{ flex: 1 / 5, justifyContent: 'center' }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Headers title={'Whatsapp Verfiction'} />
      </LinearGradient>
      <View style={styles.maincontainer}>
        <Image style={styles.dshbordimg} source={require('../../asstes/dshbordimg.png')} />
        <View style={styles.textcontainer}>
          <Text style={{ color: '#1E1E1E', fontSize: 19, width: 280, textAlign: 'center' }}>Enter your WhatsApp number to create account</Text>
          <Text style={{ color: '#9C9CA4', fontSize: 17, textAlign: 'center', marginTop: 10, width: 240 }}>We will send you a one time password (OTP)</Text>
        </View>

        <View style={styles.inputcontainer}>
          <TouchableOpacity onPress={() => setShow(true)} style={styles.countryCodeContainer}>
            <Text style={styles.countryCodeText}>{countryCode}</Text>
          </TouchableOpacity>
          <TextInput
            placeholder='Enter Your Phone Number'
            placeholderTextColor={'#757373'}
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        <CountryPicker
          show={show}
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);

          }}
        />
        <View style={styles.bottomBorder} />

        <LinearGradient
          colors={['#517FFF', '#00B2FF']}
          style={styles.btn}
        >
          <TouchableOpacity style={styles.btn}
          onPress={handlesend}>

            <Text style={{ textAlign: 'center' }}>Send</Text>

          </TouchableOpacity>
        </LinearGradient>

     
      </View>


    </View>
  )
}

export default Dashbord

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    bottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  dshbordimg: {
    resizeMode: 'contain', // Change to 'contain' to fit within dimensions
    width: 100, // Set specific width
    height: 100, // Set specific height
    alignSelf: 'center',
    top: 25,
  },
  textcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
    padding: 10,

  },

  inputcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCodeContainer: {
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  countryCodeText: {
    color: '#757373',
    fontSize: 15,
    left: 10
  },
  bottomBorder: {
    borderBottomWidth: 1, // Set the thickness of the bottom border
    marginHorizontal: 20, // Add margin to align with the inputcontainer
    marginTop: 0, // Optional: Space between the input container and the border
    borderColor: '#E0E5F2'
  },
  input: {
    left: 10,
    color: '#757373'
  },
  btn: {
    // marginHorizontal: 0,
    marginVertical: 15,
    width: "90%",
    borderRadius: 20,
    alignSelf: "center",
  }


})