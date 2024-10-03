import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Headercomponent from '../component/Headercomponent';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const OtpVerification = () => {
    const navigation=useNavigation();
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    const [fillInput1, setFillInput1] = useState('');
    const [fillInput2, setFillInput2] = useState('');
    const [fillInput3, setFillInput3] = useState('');
    const [fillInput4, setFillInput4] = useState('');

    const allInputsFilled = fillInput1 && fillInput2 && fillInput3 && fillInput4;

    const Otpverify=()=>{
        
    
        navigation.navigate('Login')
      }
    return (
        <KeyboardAvoidingView style={styles.maincontainer} behavior="padding">
            <View style={{ width: "100%", height: "25%", zIndex: -99 }}>
                <Headercomponent />
            </View>

            <View style={styles.text}>
                <Text style={{ color: "#000000", fontSize: 28, left: 20, marginTop: 20, fontWeight: '900' }}>OTP Verification </Text>
                <Text style={{ color: "#777777", fontSize: 16, left: 20, marginTop: 20, fontWeight: '400', width: 310 }}>
                    Enter the verification code we just sent you on your phone number
                </Text>
            </View>

            <View style={styles.inpcontainer}>
                <TextInput
                    style={[styles.textinput, { borderColor: fillInput1.length >= 1 ? 'blue' : '#C4C4C4' }]}
                    ref={ref1}
                    keyboardType='number-pad'
                    maxLength={1}
                    value={fillInput1}
                    onChangeText={text => {
                        setFillInput1(text);
                        if (text.length >= 1) {
                            ref2.current.focus();
                        }
                    }}
                />
                <TextInput
                    style={[styles.textinput, { borderColor: fillInput2.length >= 1 ? 'blue' : '#C4C4C4' }]}
                    ref={ref2}
                    keyboardType='number-pad'
                    maxLength={1}
                    value={fillInput2}
                    onChangeText={text => {
                        setFillInput2(text);
                        if (text.length >= 1) {
                            ref3.current.focus();
                        } else {
                            ref1.current.focus();
                        }
                    }}
                />
                <TextInput
                    style={[styles.textinput, { borderColor: fillInput3.length >= 1 ? 'blue' : '#C4C4C4' }]}
                    ref={ref3}
                    keyboardType='number-pad'
                    maxLength={1}
                    value={fillInput3}
                    onChangeText={text => {
                        setFillInput3(text);
                        if (text.length >= 1) {
                            ref4.current.focus();
                        } else {
                            ref2.current.focus();
                        }
                    }}
                />
                <TextInput
                    style={[styles.textinput, { borderColor: fillInput4.length >= 1 ? 'blue' : '#C4C4C4' }]}
                    ref={ref4}
                    keyboardType='number-pad'
                    maxLength={1}
                    value={fillInput4}
                    onChangeText={text => {
                        setFillInput4(text);
                        if (text.length >= 1) {
                            // This is the last input, so no need to focus next
                        } else {
                            ref3.current.focus();
                        }
                    }}
                />
            </View>
            <View style={styles.resend}>
                <Text style={styles.resendtxt}>Didn’t receive the code?</Text>
                <Text style={{ color: '#337CFF', left: 30, borderBottomWidth: 1, borderColor: '#337CFF' }}>Resend Code</Text>
            </View>
            <LinearGradient
                colors={['#517FFF', '#00B2FF']}
                style={[styles.verifybtn, { backgroundColor: allInputsFilled ? 'blue' : 'transparent' }]}
            >
                <TouchableOpacity disabled={!allInputsFilled} onPress={Otpverify}>

                    <Text style={{ textAlign: 'center', justifyContent: 'center', marginTop: 10 }}>Verify Code</Text>
                </TouchableOpacity>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default OtpVerification;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    inpcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    textinput: {
        borderWidth: 1,
        width: 50,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 10,
        textAlign: 'center',
        color: 'black',
        fontSize: 28,
    },
    resend: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    resendtxt: {
        color: '#777777',
        textAlign: 'center',
        right: 20,
    },
    verifybtn: {
        marginVertical: 15,
        width: "90%",
        height: 40,
        borderRadius: 10,
        alignSelf: "center",
    },
});
