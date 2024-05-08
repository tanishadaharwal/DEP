import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ViewProfilePage = ({ user, onClose }) => {
  const dummyUser = {
    name: 'John Doe',
    profilePic: require('../../assets/pr.png'),
    department: 'Engineering',
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890',
    numBooks: 5,
    isLibraryMember: true,
    daysLate: 0, // Default to 0 days late
  };

  const userData = user ? { ...dummyUser, ...user } : dummyUser;

  // Calculate late fees
  const lateFine = userData.daysLate * 2; // $2 per day

  // Calculate total dues
  const totalDues = lateFine;

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={userData.profilePic} style={styles.profilePic} />
        <Text style={styles.userName}>{userData.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Department:</Text>
        <Text style={styles.infoText}>{userData.department}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email ID:</Text>
        <Text style={styles.infoText}>{userData.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Phone Number:</Text>
        <Text style={styles.infoText}>{userData.phoneNumber}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Number of Books:</Text>
        <Text style={styles.infoText}>{userData.numBooks}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Library Member:</Text>
        <Text style={styles.infoText}>{userData.isLibraryMember ? 'Yes' : 'No'}</Text>
      </View>
      {userData.isLibraryMember && (
        <>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Late Fine:</Text>
            <Text style={styles.infoText}>Rs.{lateFine}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Total Dues:</Text>
            <Text style={styles.infoText}>Rs.{totalDues}</Text>
          </View>
        </>
      )}
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  infoLabel: {
    width: 120,
    fontWeight: 'bold',
    marginRight: 20,
  },
  infoText: {
    flex: 1,
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ViewProfilePage;
