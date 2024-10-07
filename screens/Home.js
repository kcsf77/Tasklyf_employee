import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import * as Location from 'expo-location';

const popularServicesData = [
  {
    id: '1',
    image: require('../assets/Popular Services/Rectangle 103.png'),
    title: 'Hairdresser',
    price: '₱200',
  },
  {
    id: '2',
    image: require('../assets/Popular Services/Rectangle 103 (1).png'),
    title: 'Photographer',
    price: '₱250',
  },
  {
    id: '3',
    image: require('../assets/Popular Services/Rectangle 103 2.png'),
    title: 'Makeup Artist',
    price: '₱399',
  },
];

const topServiceProvidersData = [
  {
    id: '1',
    image: require('../assets/TopServiceProvider/brien.jpg'),
    name: 'Brien Leem',
    profession: 'Computer Technician',
    rating: 5.0,
    reviews: '(50)',
  },
  {
    id: '2',
    image: require('../assets/TopServiceProvider/brian.jpg'),
    name: 'Mrian Martinez',
    profession: 'Electrician',
    rating: 3.0,
    reviews: '(30)',
  },
  {
    id: '3',
    image: require('../assets/TopServiceProvider/gab.jpg'),
    name: 'Gabo Mipal',
    profession: 'Aircon Cleaner',
    rating: 2.0,
    reviews: '(25)',
  },
];

// StarRating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Image
        key={i}
        source={require('../assets/icons/Star 1.png')} // Replace with the path to your star icon
        style={[styles.starIcon, { opacity: i <= rating ? 1 : 0.5 }]}
      />
    );
  }
  return <View style={styles.ratingContainer}>{stars}</View>;
};

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState('Getting location...');
  const [searchQuery, setSearchQuery] = useState('');

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setCurrentLocation('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      setCurrentLocation(data.address.city || data.address.town || 'Unknown');
    } catch (error) {
      console.error('Error getting location:', error);
      setCurrentLocation('Error getting location');
    }
  };

  const handleLocationPress = () => {
    getLocation();
  };

  const handleNotificationPress = () => {
    console.log('Notification button pressed!');
  };

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        contentContainerStyle={styles.container}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleLocationPress} style={styles.locationContainer}>
            <Image source={require('../assets/icons/Type=Marker.png')} style={styles.locationIcon} />
            <View>
              <Text style={styles.locationText}>Current Location</Text>
              <Text style={styles.locationName}>{currentLocation}</Text>
            </View>
            <Image source={require('../assets/icons/Type=Caret Bottom.png')} style={styles.dropdownIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNotificationPress}>
            <Image source={require('../assets/icons/Type=Bell.png')} style={styles.notificationIcon} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Image
            source={require('../assets/icons/Type=Search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            value={searchQuery}
            onChangeText={handleSearchChange}
          />
        </View>

        {/* Promo Section */}
        <View style={styles.promoContainer}>
          <Image
            source={require('../assets/image 2.png')} 
            style={styles.promoImage}  
          />
          <View style={styles.promoOverlay}>
            <Text style={styles.promoHeaderText}>Book Services</Text>
            <Text style={styles.promoSubText}>in your area with ease</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Section */}
        <View style={styles.servicesSection}>
          <Text style={styles.servicesHeaderText}>Services</Text>
          <View style={styles.servicesIconsContainer}>
            <TouchableOpacity style={styles.serviceButton}>
              <Image source={require('../assets/icons/Type=AC Solid.png')} style={styles.serviceIcon} />
              <Text style={styles.serviceText}>AC Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceButton}>
              <Image source={require('../assets/icons/Type=Capa_1.png')} style={styles.serviceIcon} />
              <Text style={styles.serviceText}>Cleaning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceButton}>
              <Image source={require('../assets/icons/SVGRepo_iconCarrier.png')} style={styles.serviceIcon} />
              <Text style={styles.serviceText}>Painting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceButton}>
              <Image source={require('../assets/icons/Type=Plug.png')} style={styles.serviceIcon} />
              <Text style={styles.serviceText}>Electrician</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular Services Section */}
        <View style={styles.popularServicesSection}>
          <Text style={styles.popularServicesHeaderText}>Popular Services</Text>
          <FlatList
            data={popularServicesData}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.popularServiceCard}>
                <Image source={item.image} style={styles.popularServiceImage} />
                <Text style={styles.popularServiceText}>{item.title}</Text>
                <Text style={styles.popularServicePrice}>Starts at</Text>
                <Text style={styles.popularServicePrice1}>{item.price}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.popularServicesContainer}
          />
        </View>

        {/* Top Service Provider Section */}
        <View style={styles.topServiceProviderSection}>
          <Text style={styles.topServiceProviderHeaderText}>Top Service Providers</Text>
          <FlatList
            data={topServiceProvidersData}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.topServiceProviderCard}>
                <Image source={item.image} style={styles.topServiceProviderImage} />
                <Text style={styles.topServiceProviderName}>{item.name}</Text>
                <Text style={styles.topServiceProviderProfession}>{item.profession}</Text>
                <StarRating rating={item.rating} />
                <View style={styles.ratingContainer}>
                  <Text style={styles.topServiceProviderReviews}>{item.reviews}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.topServiceProviderContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexGrow: 1,
    paddingBottom: 72,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationText: {
    fontSize: 12,
    color: 'gray',
  },
  locationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  notificationIcon: {
    width: 25,
    height: 25,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  promoContainer: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 35,
  },
  promoImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  promoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 40,
  },
  promoHeaderText: {
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
  },
  promoSubText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  bookButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  // Services Section
  servicesSection: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  servicesHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  servicesIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceButton: {
    alignItems: 'center',
    width: 70,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 12,
    textAlign: 'center',
  },
  // Popular Services Section
  popularServicesSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  popularServicesHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  popularServicesContainer: {
    paddingHorizontal: 5,
  },
  popularServiceCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 150,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  popularServiceImage: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    marginBottom: 10,
  },
  popularServiceText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  popularServicePrice: {
    fontSize: 12,
    color: 'gray',
  },
  popularServicePrice1: {
    fontSize: 12,
    color: 'green',
  },
   // Top Service Providers Section
  topServiceProviderSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  topServiceProviderHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  topServiceProviderContainer: {
    paddingHorizontal: 5,
  },
  topServiceProviderCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 150,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    paddingVertical: 15, // Optional adjustment
  },
  topServiceProviderImage: {
    width: 60,  // Desired size for the circular image
    height: 60, // Same value for perfect circle
    borderRadius: 30, // Half of the width/height
    marginBottom: 10,
  },
  topServiceProviderName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  topServiceProviderProfession: {
    fontSize: 12,
    color: 'gray',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 10,
    height: 10,
    marginHorizontal: 2,
  },
  topServiceProviderReviews: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Home;
