import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Tasks() {
    const [selectedTab, setSelectedTab] = useState('Scheduled'); // Manage selected tab state

    // Function to render content based on the selected tab
    const renderContent = () => {
        if (selectedTab === 'Scheduled') {
            return (
                <View style={styles.contentContainer}>
                    <Image
                        source={require('../assets/icons/no-task.png')} // Replace with your image URL
                        style={styles.image}
                    />
                    <Text style={styles.heading}>No Ongoing Task!</Text>
                    <Text style={styles.subText}>It looks like you don't have any tasks at the moment.</Text>
                </View>
            );
        } else if (selectedTab === 'Completed') {
            return (
                <View style={styles.contentContainer}>
                    <Text style={styles.heading}>Completed Tasks</Text>
                    <Text style={styles.subText}>No completed tasks yet.</Text>
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            {/* Custom Tab Header */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 'Scheduled' && styles.activeTab]}
                    onPress={() => setSelectedTab('Scheduled')}
                >
                    <Text style={[styles.tabText, selectedTab === 'Scheduled' && styles.activeTabText]}>Scheduled</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 'Completed' && styles.activeTab]}
                    onPress={() => setSelectedTab('Completed')}
                >
                    <Text style={[styles.tabText, selectedTab === 'Completed' && styles.activeTabText]}>Completed</Text>
                </TouchableOpacity>
            </View>

            {/* Content */}
            {renderContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 40,
        backgroundColor: '#F2F2F2',
        padding: 5,
        marginHorizontal :20,
        borderRadius: 10,
    },
    tab: {
        flex: 1,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F2F2F2', // Inactive tab color
        marginHorizontal: 5,
    },
    activeTab: {
        backgroundColor: '#FFC107', // Active tab color (yellow)
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    activeTabText: {
        color: '#fff',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
    subText: {
        fontSize: 20,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});