import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const VerificationScreen = ({ navigation, route }) => {
    const [otp, setOtp] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('123456'); // Static OTP for demo
    const [mobileNumber, setMobileNumber] = useState('');

    // Assuming you get the mobile number from route params passed from the SignUpScreen
    useEffect(() => {
        if (route.params && route.params.mobileNumber) {
            setMobileNumber(route.params.mobileNumber);
            sendOtp(route.params.mobileNumber); // Simulating OTP sending
        }
    }, [route.params]);

    // Simulate OTP sending
    const sendOtp = (number) => {
        // Simulate an OTP sent alert (static OTP for demo purposes)
        Alert.alert("OTP Sent", `OTP has been sent to ${number}. Static OTP is 123456`);
        console.log(`Simulated OTP sent to ${number}: 123456`);
    };

    const verifyOtp = () => {
        if (otp === generatedOtp) {
            Alert.alert('Success', 'OTP verified successfully!');
            navigation.navigate('InfoPage'); // Navigate to next page after verification
        } else {
            Alert.alert('Error', 'Invalid OTP. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/bg.png')}
                style={styles.backgroundImage}
                blurRadius={5}
            >

                <View style={styles.overlay} />
                <View style={styles.BackContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../assets/Back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.verifyText}>Verify</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.verificationTitle}>Verification</Text>
                    <Text style={styles.subTitle}>We’ve sent you an OTP code.{"\n"}Please enter the code below.</Text>

                    {/* OTP Input */}
                    <OTPInputView
                        style={styles.otpContainer}
                        pinCount={6}
                        code={otp}
                        onCodeChanged={setOtp}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.otpInput}
                        codeInputHighlightStyle={styles.otpInputHighlight}
                    />

                    {/* Confirm Button */}
                    <TouchableOpacity style={styles.confirmButton} onPress={verifyOtp}>
                        <Text style={styles.confirmText}>Confirm</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        height: '100%',
    },
    verifyText: {
        color: '#ffffff',
        marginLeft: 10,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '900'
    },
    BackContainer: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 200,
        marginLeft: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
    },
    confirmButton: {
        backgroundColor: '#3399FF',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    confirmText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        backgroundColor: '#fff',
        padding: 20,
        height: '100%',
        width: '100%',
        borderRadius: 20,
        marginTop: 50,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        elevation: 5,
    },
    verificationTitle: {
        fontSize: 25,
        fontWeight: '900',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 18,
        color: '#888',
        marginBottom: 30,
    },
    otpContainer: {
        width: '100%',
        height: 100,
        alignSelf: 'center',
    },
    otpInput: {
        width: 50,
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#C4C4C4',
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
    },
    otpInputHighlight: {
        borderBottomColor: '#007AFF',
    },
    confirmButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30,
        alignItems: 'center',
    },
    confirmText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default VerificationScreen;
