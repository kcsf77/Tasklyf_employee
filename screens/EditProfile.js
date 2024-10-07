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
                    source={require('../assets/johnny.png')} // Placeholder for profile image
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
                {/* Full Name */}
                <View style={styles.fieldContainer}>
                    <View style={styles.textField}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            value="Ricarte Genese Naraja"
                        />
                    </View>
                    <Image
                        source={require('../assets/icons/edit.png')} // Edit icon
                        style={styles.editIcon}
                    />
                </View>

                {/* Username */}
                <View style={styles.fieldContainer}>
                    <View style={styles.textField}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            value="@ricarte69"
                        />
                    </View>
                    <Image
                        source={require('../assets/icons/edit.png')} // Edit icon
                        style={styles.editIcon}
                    />
                </View>

                {/* Business Name */}
                <View style={styles.fieldContainer}>
                    <View style={styles.textField}>
                        <Text style={styles.label}>Business Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder=""
                            multiline
                            value=""
                        />
                    </View>
                    <Image
                        source={require('../assets/icons/edit.png')} // Edit icon
                        style={styles.editIcon}
                    />
                </View>

                {/* Mobile Number */}
                <View style={styles.fieldContainer}>
                    <View style={styles.textField}>
                        <Text style={styles.label}>Mobile Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Mobile Number"
                            keyboardType="phone-pad"
                            value="+691 2456 2345"
                        />
                    </View>
                    <Image
                        source={require('../assets/icons/edit.png')} // Edit icon
                        style={styles.editIcon}
                    />
                </View>
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
    InputContainer: {
        marginVertical: 20, // Adds some spacing between fields
    },
    fieldContainer: {
        flexDirection: 'row', // Align the text and icon in a row
        alignItems: 'center',
        borderWidth: 1, // Border for the entire field
        borderColor: '#DDD', // Border color
        borderRadius: 10, // Rounded corners
        paddingHorizontal: 10, // Padding inside the box
        paddingVertical: 5,
        marginBottom: 15, // Space between input fields
    },
    textField: {
        flex: 1, // Take all the remaining space
    },
    label: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    input: {
        fontSize: 16, // Adjust font size for input
        color: '#333',
        paddingVertical: 5, // Padding to make input text visually balanced
    },
    editIcon: {
        width: 15, // Size of the edit icon
        height: 15, // Size of the edit icon
        tintColor: 'grey', // Optional: Apply color to the icon
    },

});

export default EditProfileScreen;