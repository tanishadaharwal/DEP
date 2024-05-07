import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons

const AdminProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('userpage')}
      >
        <Ionicons name="people" size={24} color="black" />
        <Text style={styles.buttonText}>User Management</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('bookManagementPage')}
      >
        <Ionicons name="book" size={24} color="black" />
        <Text style={styles.buttonText}>Book Management</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('notification')}
      >
        <Ionicons name="notifications" size={24} color="black" />
        <Text style={styles.buttonText}>Notification</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default AdminProfile;
