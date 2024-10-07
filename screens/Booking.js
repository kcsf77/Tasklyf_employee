import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Booking = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Booking Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: '#000',
    },
});

export default Booking;
