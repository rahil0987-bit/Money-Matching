// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { HomeScreen } from '../../src/screen/HomeScreen';
// import {Login} from '../../src/screen/Login'
// import { SocialAccount } from '../../src/screen/SocialAccount ';
// import OtpVerifiction from '../screen/OtpVerifiction';



// const Stack = createNativeStackNavigator();

// function StackNavigation() {
//   return (
//     <NavigationContainer >
//       <Stack.Navigator  >
//       <Stack.Screen name="HomeScreen" component={HomeScreen}options={{headerShown:false}} />
//         <Stack.Screen name="Login" component={Login } options={{headerShown:false}}/>

//         <Stack.Screen name="SocialAccount" component={SocialAccount } options={{headerShown:false}}/>
//         {/* <Stack.Screen name="OtpVerifiction" component={OtpVerifiction } options={{headerShown:false}}/> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default StackNavigation;


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../src/screen/HomeScreen';
import {SingUp} from '../screen/SingUp'
import { SocialAccount } from '../../src/screen/SocialAccount ';



const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator  >
      <Stack.Screen name="HomeScreen" component={HomeScreen}options={{headerShown:false}} />
        <Stack.Screen name="SingUp" component={SingUp} options={{headerShown:false}}/>
        <Stack.Screen name="SocialAccount" component={SocialAccount } options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;