import React, { useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';

export function HomeScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SingUp'); // 2 seconds baad LoginScreen par navigate karega
    }, 2000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground 
      source={require('../asstes/Splash.png')} // Ensure path sahi hai
      style={{ flex: 1 }}
    >
     
    </ImageBackground>
  );
}
