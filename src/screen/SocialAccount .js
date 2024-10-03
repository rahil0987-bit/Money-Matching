import { useState } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwitchToggle from "react-native-switch-toggle";
import Headers from '../component/Headers';
import Whatsapp from './Whatsapp';
import Telegram from './Telegram';
import { BlurView } from '@react-native-community/blur';
// import OtpVerify from './OtpVerify';

export function SocialAccount() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isTelegramEnabled, setIsTelegramEnabled] = useState(true);
  const [isWhatsappModalVisible, setWhatsappModalVisible] = useState(false);
  const [isTelegramModalVisible, setTelegramModalVisible] = useState(false); // State for Telegram modal visibility

  const toggleWhatsappSwitch = () => {
    setIsEnabled(previousState => {
      const newState = !previousState;
      if (newState) {
        setWhatsappModalVisible(true);
      } else {
        setWhatsappModalVisible(false);
      }
      return newState;
    });
  };

  const toggleTelegramSwitch = () => {
    setIsTelegramEnabled(previousState => {
      const newState = !previousState;
      if (newState) {
        setTelegramModalVisible(true); // Show modal if enabled
      } else {
        setTelegramModalVisible(false); // Hide modal if disabled
      }
      return newState;
    });
  };

  return (
    <View style={styles.container}>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
      <LinearGradient colors={['#133A72', '#1873B9']} style={{ flex: 1 / 5, justifyContent: 'center' }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Headers title={'Social account'} />
      </LinearGradient>
      <View style={styles.contentContainer}>
        <View style={styles.formcontainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.whatsapp} source={require('../asstes/whatsapp.png')} />
            <Text style={styles.whatstext}>WhatsApp</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.publictext}>Public</Text>
            <SwitchToggle
              switchOn={isEnabled}
              onPress={toggleWhatsappSwitch}
              circleColorOn='green'
              circleColorOff='white'
              borderColor='#27AF35'
              backgroundColorOn='white'
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
              onPress={toggleTelegramSwitch}
              circleColorOn='red'
              circleColorOff='#F44336'
              borderColor='#F44336'
              backgroundColorOn='white'
              backgroundColorOff='white'
              containerStyle={styles.toggleContainer2}
              circleStyle={styles.toggleCircle}
            />
          </View>
        </View>

        {/* WhatsApp Modal */}
        <Whatsapp isVisible={isWhatsappModalVisible} onClose={() => setWhatsappModalVisible(false)} />
        
        {/* Telegram Modal */}
        <Telegram isVisible={isTelegramModalVisible} onClose={() => setTelegramModalVisible(false)} />
          {/* <OtpVerify/> */}
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
    bottom: 1,
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
    borderWidth: 2,
    borderColor: '#27AF35',
    marginLeft: 10,
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
    borderWidth: 2,
    borderColor: '#F44336',
    marginLeft: 10,
  },
});
