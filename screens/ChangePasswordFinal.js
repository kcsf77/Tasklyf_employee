import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';

const ChangePasswordFinalScreen = ({ navigation }) => {
    const handleSave = () => {
        Alert.alert(
            "Save Changes",
            "Are you sure you want to save your changes?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => navigation.goBack()
                }
            ]
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.BackContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/Back.png')}
                        style={{ opacity: 1 }}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.ChangePasswordText}>Enter new Password</Text>
            <Text style={styles.labelText}>Must be different to previous passwords.</Text>
            <View style={styles.fieldContainer}>
                <View style={styles.textField}>
                    <Text style={styles.label}>New password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="password"
                        secureTextEntry={true}
                        value="@ricartenaraja@gmail.com"
                    />
                </View>
            </View>

            <View style={styles.fieldContainer}>
                <View style={styles.textField}>
                    <Text style={styles.label}>Confirm new password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="confirm password"

                        value="@ricartenaraja@gmail.com"
                        secureTextEntry={true}
                    />
                </View>
            </View>
          

            <TouchableOpacity style={styles.reset} onPress={handleSave}>
                <Text style={styles.resetText}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
        alignItems: 'center', 
        paddingTop: 40
    },

    BackContainer: {
        alignSelf: 'flex-start', 
    },

    ChangePasswordText: {
        paddingTop: 30,
        fontSize: 30,
        fontWeight: '900',
        alignSelf: 'flex-start', 
    },
    labelText: {
        textAlign: 'center', 
        marginTop: 20,
        fontSize: 14,
        color: '#888',
        fontWeight: 'bold',
        marginBottom: 20
    },

    fieldContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 5,
        width: '100%', 
    },
    textField: {
        flex: 1,
    },
    label: {
        fontSize: 12,
        color: '#888',
        marginBottom: 5,
        fontWeight: '600'
    },
    input: {
        fontSize: 16,
        color: '#333',
        paddingVertical: 5,
        fontWeight: '600'
    },
   

    reset: {
        backgroundColor: '#3399FF',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center', 
        marginTop: 40,
        width : 250

    },
    resetText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ChangePasswordFinalScreen;