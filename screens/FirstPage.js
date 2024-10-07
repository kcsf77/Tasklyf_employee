import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FirstScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
        </View>

        <Text style={styles.title}>All services on{'\n'}your fingertips.</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    alignItems: 'flex-start',
    marginBottom: 10, 
    width: '100%',
  },
  logo: {
    width: 170, 
    height: 60, 
  },

  title: {

    fontSize: 30,
    color: '#ffffff',
    textAlign: 'left', 
    fontWeight: '500',
    marginBottom: 30, 
    width: '100%', 
  },
  content: {
    position: 'absolute',
    bottom: 100, 
    alignItems: 'center', 
    width: '80%',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#3399FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginRight: 10,
  },
  signupButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,


  },
  signupText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: '600',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

});

export default FirstScreen;