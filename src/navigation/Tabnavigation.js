import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/tabnavigationscreens/HomeScreen';
import Dashbord from '../screen/tabnavigationscreens/Dashbord';
import Cart from '../screen/tabnavigationscreens/Cart';
import Profile from '../screen/tabnavigationscreens/Profile';
import { SocialAccount } from '../screen/SocialAccount ';
import { IconPath } from '../asstes';
import { colorPath } from '../utils/color';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <Tab.Navigator    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName =IconPath.Home
          } else if (route.name === 'Dashbord') {
            iconName =IconPath.Dashbord
          } else if (route.name === 'Cart') {
            iconName =IconPath.Cart
          } else if (route.name === 'Profile') {
            iconName = IconPath.Profile
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{height:22,width:22}} tintColor={focused?colorPath.blue1 :colorPath.black} />;
        },
        tabBarActiveTintColor: colorPath.blue1, // Color when tab is focused
        tabBarInactiveTintColor: colorPath.black, // Color when tab is not focused
      })}>
        <Tab.Screen name="HomeScreen" component={SocialAccount} options={{headerShown:false}}/>
        <Tab.Screen name="Dashbord" component={Dashbord}  options={{headerShown:false}}/>
        <Tab.Screen name="Cart" component={Cart}  options={{headerShown:false}}/>
        <Tab.Screen name="Profile" component={Profile}  options={{headerShown:false}}/>
      </Tab.Navigator>
  );
}