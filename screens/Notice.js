import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const data = [
    { id: '1', name: 'Patrick Antonio', email: 'patrickantonio@gmail.com', type: 'Apartment', service: 'Bedbugs Control', time: 'Just now' },
    { id: '2', name: 'Jeffrey Lomibao', email: 'jeffreylomibao@gmail.com', type: 'House', service: 'Kitchen Cleaning', time: '1 hour ago' },
    { id: '3', name: 'Ricarte Naraja', email: 'ricartenaraja@gmail.com', type: 'House', service: 'Bathroom Cleaning', time: 'Yesterday' },
    { id: '4', name: 'Carlo Francisco', email: 'carlofrancisco@gmail.com', type: 'House', service: 'Bathroom Cleaning', time: '2 days ago' }
];

const NotificationItem = ({ item }) => (
    <View style={styles.notificationWrapper}>
        {/* Time outside the box */}
        <Text style={styles.time}>{item.time}</Text>

        {/* Notification Box */}
        <View style={styles.notificationItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text style={styles.type}>{item.type}:</Text>
            <Text style={styles.service}>{item.service}</Text>
        </View>
    </View>
);
const BookingsScreen = () => (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        showsVerticalScrollIndicator={false}
    />
);

const OthersScreen = () => (
    <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No other notifications available.</Text>
    </View>
);

export default function Notice() {
    const [activeTab, setActiveTab] = useState('Bookings'); // State to track the active tab

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Notifications</Text>
                <TouchableOpacity style={styles.icon}>
                <Image
                        source={require('../assets/icons/chat (3).png')}
                        style={{ opacity: 1 }}
                    />
                </TouchableOpacity>
            </View>

            {/* Custom Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'Bookings' && styles.activeTab]}
                    onPress={() => setActiveTab('Bookings')}
                >
                    <Text style={[styles.tabText, activeTab === 'Bookings' && styles.activeTabText]}>Bookings</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, activeTab === 'Others' && styles.activeTab]}
                    onPress={() => setActiveTab('Others')}
                >
                    <Text style={[styles.tabText, activeTab === 'Others' && styles.activeTabText]}>Others</Text>
                </TouchableOpacity>
            </View>

            {/* Conditionally render the screen based on the active tab */}
            {activeTab === 'Bookings' ? <BookingsScreen /> : <OthersScreen />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15, // Add vertical padding if needed
        marginHorizontal: -20, // Negative margin equal to the container padding
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 15
    },
    headerText: { fontSize: 24, fontWeight: 'bold' },
    icon: { padding: 10 },
    notificationWrapper: {
        marginVertical: 20,

    },
    notificationItem: {
        padding: 20,

        backgroundColor: '#f9f9f9',
        borderColor: '#ddd',
        borderWidth: 1,
        position: 'relative', // Allow child elements to be positioned inside
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#0066cc',
    },
    type: {
        marginTop: 5,
        fontWeight: 'bold',
    },
    service: {
        color: '#555',
        marginTop:5
    },
   
    time: {
        position: 'absolute', 
        top: -20, 
        right: 0, 
        color: '#999',
        fontSize: 12,
    },
    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    emptyText: { fontSize: 16, color: '#555' },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    tab: {
        marginTop: 25,
        paddingVertical: 5,
        paddingHorizontal: 50,
        marginBottom: 20
    },
    activeTab: {
        borderBottomWidth: 3,
        borderBottomColor: '#FBCE50'
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#888'
    },
    activeTabText: {
        color: '#FBCE50'
    }
});