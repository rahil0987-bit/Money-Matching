// import { useState } from 'react';
// import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import SwitchToggle from "react-native-switch-toggle";
// import Headers from '../component/Headers';


// export function SocialAccount() {
//   const [isEnabled, setIsEnabled] = useState(false);  
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'}/>
//       <LinearGradient colors={['#133A72', '#1873B9']} style={{flex:1/5,justifyContent:'center'}} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
//    <Headers title={'Social account'}/>
// </LinearGradient>
// <View style={{flex:1,backgroundColor:'white',position:'relative',bottom:20,borderTopLeftRadius:20,borderTopRightRadius:20}}>
// <View style={styles.formcontainer}>
//       <View style={{flexDirection:'row',alignItems:'center'}}>
//       <Image  style={styles.whatsapp}source={require('../asstes/whatsapp.png')}/>
//       <Text style={styles.whatstext}>Whatsapp</Text>
//       </View>

//  <View style={{flexDirection:'row',alignItems:'center'}}>
//       <Text style={styles.publictext}>Public</Text>
//       <SwitchToggle
//           switchOn={isEnabled}
//           onPress={toggleSwitch}
//            circleColorOn='green'
//            borderColor='#27AF35'
// backgroundColorOff='#27AF35'
//           containerStyle={styles.toggleContainer}
//           circleStyle={styles.toggleCircle}
//         />

//  </View>
//       </View>
// </View>
//       {/* <Image style={styles.group2} source={require('../asstes/group2.png')} />
//       <Image style={styles.backimg} source={require('../asstes/Back.png')} />
//       <Text style={styles.Text}>Social account</Text>
//       <Image style={styles.whitebg} source={require('../asstes/whitebg.png')} />
//       <View style={styles.formcontainer}>
//       <Image  style={styles.whatsapp}source={require('../asstes/whatsapp.png')}/>
//       <Text style={styles.whatstext}>Whatsapp</Text>
//       <Text style={styles.publictext}>Public</Text>

//  <View style={{backgroundColor:'red'}}>
//       <SwitchToggle
//           switchOn={isEnabled}
//           onPress={toggleSwitch}
//           containerStyle={styles.toggleContainer}
//           circleStyle={styles.toggleCircle}
//         />

//  </View>
//       </View>
//       <Image style={styles.tabnav} source={require('../asstes/tabnav.png')}/> */}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor:'white'
//   },
//   group2: {
//     width: 428,
//     height: 295,
//     top: -16,
//     left: -29,
//     borderTopLeftRadius: 40,  // Adjust the value as needed
//     borderBottomLeftRadius: 40, // Adjust the value as needed
//     overflow: 'hidden', // Ensure the corners are rounded
//   },
//   Text: {
//     // position: 'absolute', // Position text absolutely within the container
//     // top: 60, // Adjust as needed
//     left: 90, // Adjust as needed
//     color: 'white', // Change color for visibility
//     fontSize: 20, // Adjust font size as needed
//     fontWeight: 'bold', // Make the text bold
//     fontFamily: 'Avenir LT Std',
//     fontWeight: "750",
//     lineHeight: 24
//   },
//   backimg: {
//     position: 'absolute',
//     top: 60,
//     left: 30,
//     width: 26,
//     height: 26
//   },
//   whitebg: {
//     position: 'absolute', // Change to absolute
//     width: 360,
//     height: 685,
//     top: 120, // Adjust this value to overlap
//     borderRadius: 25,
//   },

//   tabnav:{
//     width:375,
//     height:64,
//     top:415
//   },
//   whatsapp:{
//     width:29,
//     height:29,
//   },
//   formcontainer:{
//     backgroundColor:'#EFF2F4',
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center',
//     borderWidth:1,
//     width:'90%',
//     height:45,
//     borderRadius:10,
//     borderColor:"#D9D7D7",
//     alignSelf:'center',
//     marginTop:13,
//     paddingHorizontal:15
//   },
//   whatstext:{
//     color:'#1E1E1E',
//     // top:-18,
//     // left:55,
//     fontSize:15,
//     fontFamily:'Avenir LT Std',
//     fontWeight:'300',
//     lineHeight:20,
//     left:10
//   },
//   publictext:{
//     color:'#1E1E1E',
//     fontSize:10,
//     fontFamily:'Avenir LT Std',
//     right:10
//   },
//   toggleContainer: {
//     width: 45,
//     height: 20,
//     borderRadius: 25,
//     // top:-50,
//     // left:250
//   },
//   toggleCircle: {
//     width: 20,
//     height: 20,
//     borderRadius: 20,
//   },

// })




import { useState } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwitchToggle from "react-native-switch-toggle";
import Headers from '../component/Headers';
import { Home } from './Home';






export function SocialAccount() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isTelegramEnabled, setIsTelegramEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleTelegram = () => setIsTelegramEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
      <LinearGradient colors={['#133A72', '#1873B9']} style={{ flex: 1 / 5, justifyContent: 'center' }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Headers title={'Social account'} />
      </LinearGradient>
      <View style={styles.contentContainer}>
        <View style={styles.formcontainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.whatsapp} source={require('../asstes/whatsapp.png')} />
            <Text style={styles.whatstext}>Whatsapp</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.publictext}>Public</Text>
            <SwitchToggle
              switchOn={isEnabled}
              onPress={toggleSwitch}
              circleColorOn='green'
              circleColorOff='white'
              borderColor='#27AF35' // Border color for the toggle
              backgroundColorOn='white' // Background color when ON
              // backgroundColorOff='#D9D7D7' // Background color when OFF
              containerStyle={styles.toggleContainer}
              circleStyle={styles.toggleCircle}
            />
          </View>
        </View>


        <View style={styles.formcontainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.whatsapp} source={require('../asstes/telegram.png')} />
            <Text style={styles.whatstext}>Telegram</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.publictext}>Public</Text>
            <SwitchToggle
              switchOn={isTelegramEnabled}
              onPress={toggleTelegram}
              circleColorOn='red'
              circleColorOff='#F44336'
              borderColor='#F44336' // Border color for the toggle
              backgroundColorOn='white' // Background color when ON
              backgroundColorOff='white' // Background color when OFF
              containerStyle={styles.toggleContainer2}
              circleStyle={styles.toggleCircle}
            />
          </View>
        </View>

      </View>

   

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    bottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  formcontainer: {
    backgroundColor: '#EFF2F4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    height: 45,
    borderRadius: 10,
    borderColor: "#D9D7D7",
    alignSelf: 'center',
    marginTop: 13,
    paddingHorizontal: 15,
  },
  whatsapp: {
    width: 29,
    height: 29,
  },
  whatstext: {
    color: '#1E1E1E',
    fontSize: 15,
    fontFamily: 'Avenir LT Std',
    fontWeight: '300',
    lineHeight: 20,
    left: 10,
  },
  publictext: {
    color: '#1E1E1E',
    fontSize: 10,
    fontFamily: 'Avenir LT Std',
    right: 10,
  },
  toggleContainer: {
    width: 45,
    height: 20,
    borderRadius: 25,
    borderWidth: 2, // Specify border width
    borderColor: '#27AF35', // Border color
    // justifyContent: 'center', // Center the switch
    marginLeft: 10, // Add some margin if needed
  },
  toggleCircle: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  toggleContainer2: {
    width: 45,
    height: 20,
    borderRadius: 25,
    borderWidth: 2, // Specify border width
    borderColor: '#F44336', // Border color
    // justifyContent: 'center', // Center the switch
    marginLeft: 10, // Add some margin if needed
  },
});
