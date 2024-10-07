import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogout = () => {
    setLogoutModalVisible(true);
  };

  const confirmLogout = () => {
    setLogoutModalVisible(false);
    console.log("Logged out successfully.");
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/johnny.png')} // Placeholder for profile image
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Ricarte Naraja</Text>
        <Text style={styles.profileEmail}>@ricarte9</Text>
        <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => item.title === 'Logout' && handleLogout() || item.title === 'Change Password' && navigation.navigate('ChangePassword')} // Trigger logout when clicked
          >

            <Text style={styles.menuText}>{item.title}</Text>
            {item.title === 'Account' ? (
              <Text style={styles.accountText}>ricartenaraja@gmail.com</Text> // Show "Edit" text when the title is 'Account'
            ) : (
              <Image
                source={require('../assets/icons/next.png')} // Use the next icon for other items
                style={styles.menuArrow}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Confirmation Bottom Sheet Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheetContainer}>
            {/* Handle on top */}
            <View style={styles.handleBar} />

            <Text style={styles.modalTitle}>Log out</Text>
            <Text style={styles.modalMessage}>Are you sure you want to log out?</Text>

            <View style={styles.modalButtons}>
              <Pressable style={styles.modalButtonYes} onPress={confirmLogout}>
                <Text style={styles.modalButtonTextYes}>Yes</Text>
              </Pressable>
              <Pressable style={styles.modalButtonNo} onPress={() => setLogoutModalVisible(false)}>
                <Text style={styles.modalButtonTextNo}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

// Array with different images for each item
const menuItems = [
  { title: 'Account' },
  { title: 'Change Password' },
  { title: 'Help Center' },
  { title: 'Rate us' },
  { title: 'FAQ’s' },
  { title: 'Privacy Policy' },
  { title: 'Logout', }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
  },
  editProfileButton: {
    marginTop: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007bff',
  },
  editProfileText: {
    color: '#007bff',
    fontSize: 10,
  },
  menu: {
    paddingHorizontal: 15,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  menuArrow: {
    width: 18,
    height: 18,
    marginLeft: 'auto',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheetContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 35,
    color: '#888',
  },
  modalButtons: {
    width: '100%',
    alignItems: 'center',
  },
  modalButtonYes: {
    backgroundColor: '#007AFF',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  modalButtonNo: {
    backgroundColor: '#D7D7D7',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
  },
  modalButtonTextYes: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalButtonTextNo: {
    color: '#888',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;