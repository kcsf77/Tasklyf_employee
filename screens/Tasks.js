import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

export default function Tasks() {
    const [selectedTab, setSelectedTab] = useState('Scheduled'); // Manage selected tab state


    const services = [
        {
            id: '002493',
            date: 'Friday, 5 September 2024',
            propertyType: 'Apartment',
            serviceType: 'Kitchen Cleaning',
            total: 900,
            price: 400,
            name: 'Patrick Antonio',
            phone: '+63 987654321',
            address: '123 Dagupan City, Philippines',
            serviceRate: 3.0,
            customerComment: 'Maayos siyang magtrabaho. On time siya dumating. Malinis na malinis na kusina namin nice tone!! :)',
        },
        {
            id: '002492',
            date: 'Wednesday, 3 September 2024',
            propertyType: 'House',
            serviceType: 'Kitchen Cleaning',
            total: 400,
            price: 400,
        },
    ];

    const ServiceCard = ({ service }) => {
        const [showDetails, setShowDetails] = useState(false);

        return (
            <View style={styles.cardContainer}>
            {/* Date outside the card */}
            <Text style={styles.date}>{service.date}</Text>
    
            {/* Card with service details */}
            <View style={styles.card}>
                <Image source={require('../assets/icons/delivery-note.png')} style={styles.icon} />
                <Text style={styles.serviceId}>#{service.id}</Text>
                <Text style={styles.propertyType}>{service.propertyType}</Text>
                <Text style={styles.serviceType}>{service.serviceType}</Text>
                 <Text style={styles.total}>Total: ₱{service.total}</Text>
    
                {showDetails && (
                    <View style={styles.details}>
                        <View style={styles.icons}>
                            {/* Placeholders for the images */}
                            <Image source={require('../assets/icons/service-placed.png')} style={styles.icon} />
                            <Image source={require('../assets/icons/payment-info.png')} style={styles.icon} />
                            <Image source={require('../assets/icons/service completed.png')} style={styles.icon} />
                        </View>
                        <Text style={styles.contact}>{service.name}</Text>
                        <Text style={styles.phone}>{service.phone}</Text>
                        <Text style={styles.address}>{service.address}</Text>
                        <Text style={styles.rating}>Service Rate: {service.serviceRate} ★</Text>
                        <Text style={styles.comment}>{service.customerComment}</Text>
                    </View>
                )}
    
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setShowDetails(!showDetails)}
                >
                    <Text style={styles.buttonText}>{showDetails ? 'Hide Details' : 'Show Details'}</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    };

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
                <View style={styles.container} >

                    <View style={styles.topControls}>
                        <TouchableOpacity style={styles.controlButton}>
                        <Image
                        source={require('../assets/icons/sort (1).png')} // Replace with your image URL
                        style={styles.controlIcons}
                    />
                            <Text style={styles.controlButtonText}>Sort by</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.controlButton}>
                        <Image
                        source={require('../assets/icons/horizontal-filter.png')} // Replace with your image URL
                        style={styles.controlIcons}/>
                            <Text style={styles.controlButtonText}>Filter</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={services}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ServiceCard service={item} />}
                    />
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
        marginHorizontal: 20,
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





    topControls: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 15,   
      },
      controlButton: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginLeft: 10,
        flexDirection: 'row',
        borderWidth :1,
        borderColor: "#808083"
      },
      controlButtonText: {
        color: 'black',
        fontWeight: 'bold',
        alignSelf:"center"
      },

      controlIcons:{
        marginRight: 10
      },



      cardContainer: {
        marginBottom: 20, // Spacing between cards
    },

    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:"#D9D9D9"
    },
      
    date: {
        fontSize: 15,
        color: '#1F1F1F',
        marginBottom: 5, // Space between date and the card
        marginLeft: 20,  // Align the date with the card's padding (adjust as needed)
    },
    serviceId: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        color: "#FF3B30"
    },
    propertyType: {
        fontSize: 14,
        color: '#333',
    },
    serviceType: {
        fontSize: 14,
        marginVertical: 5,
        color: '#808083',
    },
    total: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    details: {
        marginTop: 10,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    contact: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    phone: {
        fontSize: 14,
        color: '#555',
    },
    address: {
        fontSize: 14,
        color: '#555',
    },
    rating: {
        fontSize: 14,
        color: '#555',
    },
    comment: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#333',
        marginVertical: 5,
    },
    button: {
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 5,
        width: 200,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#007AFF",
        alignSelf: "flex-end"
    },
    buttonText: {
        color: '#007AFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});