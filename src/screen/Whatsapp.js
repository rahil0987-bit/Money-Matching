import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { BlurView } from "@react-native-community/blur";

const Whatsapp = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      statusBarTranslucent
    >

      <View style={styles.modalOverlay}>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={2}
        reducedTransparencyFallbackColor="white"
      />

        <View style={styles.modalView}>
          <Image source={require('../asstes/whatsapp.png')} style={styles.modalImage} />
          <Text style={styles.modalText}>Is your whatsapp number same as actual number??</Text>
          <View style={styles.btn}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={[styles.closeButton, styles.marginLeft]}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Whatsapp;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 250,
    height:300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop:-200
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:'#878787'
  },
  closeButton: {
    marginTop:20,
    backgroundColor: '#008CBA',
    padding: 10,
    borderRadius: 5,
    flex: 1, // Allow buttons to take equal space
    borderRadius:10

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center', // Center the text
  },
  btn: {
    flexDirection: "row",
    justifyContent: 'space-between', // Use space-between to distribute space
    width: '100%', // Ensure it takes the full width of the modal
    marginTop: 10, // Add some top margin if needed
  },
  marginLeft: {
    marginLeft: 10, // Add margin to the left button
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
