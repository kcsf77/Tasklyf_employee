import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('+63'); // Initial value includes country code
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true); // For Password visibility

  const handleLogin = () => {
  const validMobileNumber = '+639566776559';
  const validPassword = 'koypogi01';

  if (mobileNumber === validMobileNumber && password === validPassword) {
    Alert.alert(
      'Login Successful',
      'Welcome back!',
      [
        {
          text: 'OK',
          onPress: () =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'MainTab' }],
            }),
        },
      ],
      { cancelable: false }
    );
  } else {
    Alert.alert('Login Failed', 'Invalid mobile number or password. Please try again.');
  }
};

  const handleMobileNumberChange = (text) => {
    // If the user inputs a string, keep the +63 prefix and concatenate the rest
    if (text.length >= 3) {
      setMobileNumber(`+63${text.slice(3)}`);
    } else {
      setMobileNumber('+63'); // Reset to just the country code if text length is less than 3
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

        <View style={styles.loginContainer}>
          <Text style={styles.loginTitle}>Log In</Text>

          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={handleMobileNumberChange} // Updated function for handling input
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Icon
                name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color="#BFBFBF"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
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

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign Up</Text>
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
  loginContainer: {
    width: '100%',
    padding: 40,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 3,
    height: '100%',
    marginTop: 30,
  },
  loginTitle: {
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
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#3399FF',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#007bff',
    textAlign: 'start',
    marginBottom: 50,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
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
  signUpText: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 40,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 7,
  },
});

export default LoginScreen;
