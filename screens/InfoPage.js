import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const InfoScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true); // For Password visibility
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true); // For Confirm Password visibility

    // Function to handle sign-up
    const handleSignUp = () => {
        // Check if all fields are filled
        if (!firstName || !lastName || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        // Here you can add your sign-up logic (e.g., API call to register the user)
        
        // Show success message
        Alert.alert('Success', 'Your account has been successfully created!');

        // Navigate to Login screen upon successful sign-up
        navigation.navigate('Login');
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

                <View style={styles.InfoContainer}>
                    <Text style={styles.Title}>Personal Information</Text>

                    <View style={styles.nameContainer}>
                        <View style={styles.nameInputContainer}>
                            <Text style={styles.label}>First Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="First Name"
                                value={firstName}
                                onChangeText={setFirstName}
                            />
                        </View>
                        <View style={styles.nameInputContainer}>
                            <Text style={styles.label}>Last Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Last Name"
                                value={lastName}
                                onChangeText={setLastName}
                            />
                        </View>
                    </View>

                    {/* Password Input with Eye Icon */}
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

                    {/* Confirm Password Input with Eye Icon */}
                    <Text style={styles.label}>Confirm Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            secureTextEntry={confirmPasswordVisible}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                        >
                            <Icon
                                name={confirmPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                                size={24}
                                color="#BFBFBF"
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
                        <Text style={styles.loginButtonText}>Sign up</Text>
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
    InfoContainer: {
        width: '100%',
        padding: 40,
        backgroundColor: '#fff',
        borderRadius: 30,
        elevation: 3,
        height: '100%',
        marginTop: 30,
    },
    Title: {
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
        borderColor: '#C4C4C4',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
    },
    
    nameContainer: {
        flexDirection: 'row', // Align inputs side by side
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    nameInputContainer: {
        flex: 1,
        marginRight: 5
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

export default InfoScreen;
