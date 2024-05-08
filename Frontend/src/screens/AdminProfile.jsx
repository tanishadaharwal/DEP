import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons

const AdminProfile = ({ navigation }) => {
  return (
    <SafeAreaView className="mt-24 h-full">
    <Text className="text-3xl mx-auto mb-48">Welcome, Admin !</Text>

    <View style={styles.container} >
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('userpage')}
      >
        <Ionicons name="people" size={24} color="black" />
        <Text style={styles.buttonText}>User Management</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('bookManagementPage')}
      >
        <Ionicons name="book" size={24} color="black" />
        <Text style={styles.buttonText}>Book Management</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('notification')}
      >
        <Ionicons name="notifications" size={24} color="black" />
        <Text style={styles.buttonText}>Your Notifications</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default AdminProfile;
