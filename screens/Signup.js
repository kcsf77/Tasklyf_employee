import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  // Initialize the mobileNumber with +63
  const [mobileNumber, setMobileNumber] = useState('+63');

  const handleMobileNumberChange = (text) => {
    // Ensure that +63 stays at the start of the input
    if (!text.startsWith('+63')) {
      setMobileNumber('+63');
    } else {
      setMobileNumber(text);
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
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={{ opacity: 1 }}
          />
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpTitle}>Sign Up</Text>

          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+639XXXXXXXXX"
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={handleMobileNumberChange} // Handle the text change
          />

          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={() => navigation.navigate('Verify', { mobileNumber })} // Pass mobile number
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>

          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.separatorLine} />
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/Facebook.png')} 
                style={styles.icon}
              />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/Google.png')} 
                style={styles.icon}
              />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Log in</Text>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 200, 
  },
  signUpContainer: {
    width: '100%',
    padding: 40,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 3,
    height: '100%',
    marginTop: 30, 
  },
  signUpTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'start',
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 10,
    borderRadius: 10,
    marginBottom: 25,
  },
  nextButton: {
    backgroundColor: '#3399FF',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 50,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },
  orText: {
    marginHorizontal: 10,
    color: '#333',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 0.3,           
  },
  socialButtonText: {
    color: '#333',
  },
  icon: {
    width: 20,  
    height: 20, 
    marginRight: 8, 
  },
  loginText: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 100,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUpScreen;
