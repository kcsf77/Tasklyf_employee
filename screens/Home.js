import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView

const Home = () => {
  return (
    <GestureHandlerRootView style={styles.safeArea}> 
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Banner (1).png')}
          style={styles.logoImage} // Use a defined style for the image
        />
      </View>

      {/* Greeting Container */}
      <View style={styles.container}>
        <Image
          source={require('../assets/johnny.png')}
          style={styles.profile} // Use a defined style for the image
        />
        <View style={styles.texts}>
          <Text style={styles.greetingText}>Good morning,</Text>
          <Text style={styles.nameText}>Ricarte!</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.content}>
          <View style={styles.booking}>
            <Image
              source={require('../assets/icons/manual-book.png')}
              style={styles.icon} // Use a defined style for the image
            />
            <Text style={styles.title}>Bookings</Text>
          </View>

          <Image
            source={require('../assets/ss1.png')}
            style={styles.ss1} // Use a defined style for the image
          />

          <View style={styles.earnings}>
            <Image
              source={require('../assets/icons/coins-stack (3).png')}
              style={styles.icon}
            />
            <Text style={styles.title}>Earnings</Text>
          </View>

          <Image
            source={require('../assets/ss2.png')}
            style={styles.ss1} // Use a defined style for the image
          />

          <View style={styles.feedbacks}>
            <Image
              source={require('../assets/icons/feedback-icon.png')}
              style={styles.icon}
            />
            <Text style={styles.title}>Customer Feedbacks</Text>
          </View>

          <Image
            source={require('../assets/ss3.png')}
            style={styles.ss1} // Use a defined style for the image
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center', // Center the logo horizontally
  },
  logoImage: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginTop: 10,
  },
  container: {
    alignItems: 'flex-start', // Corrected from 'Start' to 'flex-start'
    backgroundColor: '#007AFF',
    padding: 10,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  greetingText: {
    color: '#E2FF04', // Change the color of "Good morning"
    fontSize: 22, // Adjust font size as needed
  },
  nameText: {
    color: 'white', // Change the color of "Brien"
    fontSize: 22, // Adjust font size as needed
    fontWeight: "bold",
  },
  profile: {
    borderRadius: 50,
    marginRight: 10,
    alignSelf: 'center',
    height: 55,
    width: 55,
  },
  texts: {
    marginRight: 20,
    alignSelf: "center",
  },
  content: {
    padding: 20,
  },
  booking: {
    flexDirection: 'row',
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  earnings: {
    flexDirection: 'row',
    marginTop: 10,
  },
  feedbacks: {
    flexDirection: 'row',
    marginTop: 10,
  },
  ss1 :{
     resizeMode: 'contain'
  }
});

export default Home;