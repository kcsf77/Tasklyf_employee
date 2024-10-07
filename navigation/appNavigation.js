import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image } from 'react-native'; // Import Image component
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search'; 
import BookingScreen from '../screens/Booking'; 
import ProfileScreen from '../screens/Profile'; 
import FirstScreen from '../screens/FirstPage';
import LoginScreen from '../screens/Login'; 
import SignUpScreen from '../screens/Signup'; 
import VerificationScreen from '../screens/Verification'; 
import InfoScreen from '../screens/InfoPage'; 
import EditProfileScreen from '../screens/EditProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false, // Show labels
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 10,
    height: 60,
    backgroundColor: '#fff',
  },
  tabBarLabelStyle: {
    fontSize: 12, // Adjust font size as needed
    marginBottom: 5, // Space between label and icon
  },
};

const MainTab = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Image 
              source={require('../assets/icons/Type=Home.png')} // Update with your image path
              style={{ width: 25, height: 25, tintColor: focused ? '#007AFF' : '#A1A1A1' }} 
            />
            <Text style={{ color: focused ? '#007AFF' : '#A1A1A1' }}>Home</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Image 
              source={require('../assets/icons/Type=Search.png')} // Update with your image path
              style={{ width: 25, height: 25, tintColor: focused ? '#007AFF' : '#A1A1A1' }} 
            />
            <Text style={{ color: focused ? '#007AFF' : '#A1A1A1' }}>Search</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Booking"
      component={BookingScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Image 
              source={require('../assets/icons/Type=Calendar.png')} // Update with your image path
              style={{ width: 25, height: 25, tintColor: focused ? '#007AFF' : '#A1A1A1' }} 
            />
            <Text style={{ color: focused ? '#007AFF' : '#A1A1A1' }}>Booking</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Image 
              source={require('../assets/icons/Type=Profile.png')} // Update with your image path
              style={{ width: 25, height: 25, tintColor: focused ? '#007AFF' : '#A1A1A1' }} 
            />
            <Text style={{ color: focused ? '#007AFF' : '#A1A1A1' }}>Profile</Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstPage" component={FirstScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Verify" component={VerificationScreen} />
        <Stack.Screen name="InfoPage" component={InfoScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
