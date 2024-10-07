import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
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
                    onPress: () => navigation.goBack() // Navigate back when OK is pressed
                }
            ]
        );
    };
    return (
        <View style={styles.container}>

            <View style={styles.appBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.Close}>Close</Text>
                </TouchableOpacity>
                <Text style={styles.Title}>Edit Profile</Text>

                <TouchableOpacity onPress={handleSave}>
                    <Text style={styles.Save}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.pictureContainer}>
                <Image
                    source={require('../assets/Profile Picture.png')} // Placeholder for profile image
                    style={styles.profileImage}
                />
                <View style={styles.cameraBackground}>
                    <Image
                        source={require('../assets/icons/camera.png')} 
                        style={styles.cameraIcon}
                    />
                </View>
            </View>
            <View style={styles.InputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value='IShowSpeed'
                />
                <Text style={styles.label}>Email ID</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address" 
                    value='ishowspeed@gmail.com'
                />
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    keyboardType="phone-pad" 
                    value='+69124562345'
                />
                <Text style={styles.label}>Bio</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Bio"
                    multiline 
                    value='-------------------------------'
                />
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },

    Title: {
        fontWeight: '900',
        fontSize: 18
    },

    Close: {
        color: "#808083",
        fontSize: 16,
        fontWeight: '500',
    },
    Save: {
        color: "#007AFF",
        fontSize: 16,
        fontWeight: '500',
    },

    appBar: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between', 
        paddingHorizontal: 20,
        paddingTop: 10
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
    pictureContainer: {
        alignItems: 'center',
        paddingVertical: 60,
        position: 'relative', 
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    cameraBackground: {
        position: 'absolute',
        bottom: 45,
        left: 173,
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    cameraIcon: {
        width: 30,
        height: 30,
    },
    label: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },

    InputContainer: {
        padding: 10
    },

    input: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        // backgroundColor: '#f9f9f9', 
        fontSize: 15,
        fontWeight: 'bold',
    },
    saveButton: {
        backgroundColor: '#3399FF',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,

    },
});

export default EditProfileScreen;