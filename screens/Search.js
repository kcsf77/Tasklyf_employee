import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Search = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Search Page</Text>
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

export default Search;
