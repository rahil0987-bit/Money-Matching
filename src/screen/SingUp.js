import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Button, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
export function SingUp(props) {

  const [name, setName] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [pnumber, setPnumber] = useState();
  const [india, setIndia] = useState();
  const [password, setPassword] = useState();
  const [confpass, setConfPass] = useState();


  const navigation = useNavigation();


  return (
    <ScrollView style={styles.container}>
      <Image source={require('../asstes/blue1.png')}
        style={styles.img} />
      <Image source={require('../asstes/blue2.png')}
        style={styles.img2} />
      <Image source={require('../asstes/group.png')}
        style={styles.group} />
      <Text style={styles.text}>Sing up</Text>

      <View>

        <TextInput placeholder='First Name'
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholderTextColor="#878787" />

        <TextInput placeholder='Last Name'
          onChangeText={(text) => setLname(text)}
          style={styles.input}
          placeholderTextColor="#878787" />

        <TextInput placeholder='Email Address'
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholderTextColor="#878787" />

        <TextInput placeholder='Phone Number'
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholderTextColor="#878787" />

        <TextInput placeholder='India'
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholderTextColor="#878787" />

        <TextInput placeholder='Password'
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholderTextColor="#878787" />

        <TextInput placeholder='Confirm Password'
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholderTextColor="#878787" />

      </View>


      <Image source={require('../asstes/check.png')}
        style={styles.img3} />

      <Text style={styles.text2}>I Agree Terms and Condition</Text>
      {/* Horizontal Line */}
      <View style={styles.line} />

      <TouchableOpacity style={styles.btn} onPress={() => { console.log('hjhjshuksdhu'); navigation.navigate('TabNavigation') }}>
        <Text style={styles.textbtn}>Submit Now</Text>
      </TouchableOpacity>

      <View style={styles.line2} />
      <Text style={styles.or}>or</Text>
      <View style={styles.line3} />

      <View style={styles.logowrap}>
        <Image style={styles.apple} source={require('../asstes/Apple.png')} />
        <Image style={styles.apple} source={require('../asstes/search.png')} />
      </View>

      <View style={styles.textwrap}>
        <Text style={styles.textlast}>Already have an account ?</Text>

        <TouchableOpacity >
          <Text style={styles.textlogin} >Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 400,
    height: 200,
    top: -60,

  },
  img2: {
    width: 200,
    height: 200,
    // right: 60,
    top: -220,
    zIndex: -99,
    right: 10

  },
  group: {
    width: 200, // Yahan width ko chhota kar rahe hain
    height: 100, // Height bhi set kar sakte hain
    resizeMode: 'contain',
    top: -310,
    left: 80
  },
  text: {
    color: "black",
    fontSize: 30,
    top: -250,
    left: 20,
    fontFamily: "Inter",
    fontWeight: '900',
    lineHeight: 30
  },
  input: {
    color: '#878787',
    width: 300,
    height: 50,
    top: -220,
    left: 30,
   


    borderBottomWidth: 1,
    borderColor: '#E0E5F2'
  },
  img3: {
    width: 20,
    height: 20,
    flex: 1,
    top: -200,
    left: 30
  },
  text2: {
    color: '#6399F9',
    top: -220,
    left: 60
  },
  line: {
    borderBottomColor: '#6399F9', // Line color
    borderBottomWidth: 1, // Line thickness
    width: '35%', // Line width
    marginVertical: 20, // Space above and below the line
    alignSelf: 'center', // Center the line
    top: -240,
    right: 5
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', // Center the button horizontally
    borderRadius: 10, // Set border radius
    overflow: 'hidden', // Ensure corners are rounded
    top: -250,
    marginVertical: 20
  },
  textbtn: {
    textAlign: 'center',
    backgroundColor: '#517FFF',
    width: 310,
    height: 40,
    fontSize: 16,
    color: '#FFFFFF', // Set text color to white for visibility

    fontFamily: 'Inter',
    fontWeight: '900',
    lineHeight: 40,
  },
  line2: {
    borderBottomColor: '#E0E5F2', // Line color
    borderBottomWidth: 2, // Line thickness
    width: '25%', // Line width
    marginVertical: 20, // Space above and below the line
    alignSelf: 'center', // Center the line
    top: -240,
    right: 60
  },
  or: {
    color: '#B1B1B1',
    top: -277,
    left: 180,
    fontSize: 20
  },
  line3: {
    borderBottomColor: '#E0E5F2', // Line color
    borderBottomWidth: 2, // Line thickness
    width: '25%', // Line width
    marginVertical: 20, // Space above and below the line
    alignSelf: 'center', // Center the line
    top: -308,
    left: 78
  },
  logowrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: -300
  },
  apple: {
    resizeMode: 'cover',
    width: 20,
    height: 20,
    margin: 10
  },
  textwrap: {
    flexDirection: 'row',
    flexDirection: 'row',
    justifyContent: 'center',
    top: -250

  },
  textlast: {
    color: '#878787'
  },
  textlogin: {
    color: '#6399F9'
  }
})