import { Modal, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { BlurView } from "@react-native-community/blur";


const Telegram = ({ isVisible, onClose }) => {
  return (
    <Modal 
      transparent={true}
      animationType='slide'
      visible={isVisible}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.modalOverlay}>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={3}
        reducedTransparencyFallbackColor="white"
      />
        <View style={styles.modalView}>
            <View style={styles.line}/>
          <Text style={styles.text}>Telegram</Text>
          
          <TextInput 
            style={styles.input}
            placeholder='Mobile Number / User Name'
            placeholderTextColor="#999"
          />

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Telegram;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  modalView: {
    width: '100%',
    // maxWidth: 350,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 20, // For Android shadow
    // shadowOpacity: 0.25, // For iOS shadow
    shadowRadius: 10, // For iOS shadow
  },
  text: {
    color: '#878787',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '500',
    marginRight:220
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#E4DFDF',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1873B9',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '750',
    fontFamily:"Avenir LT Std"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  line:{
    width:'10%',
    height:2,
    backgroundColor:'#B2B2B280',
  }
});
