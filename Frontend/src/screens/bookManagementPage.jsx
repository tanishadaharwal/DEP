import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const BookManagementPage = () => {
  const handleViewCurrentBook = () => {
    // Logic to view current book
    Alert.alert('View Current Book', 'Viewing current book');
  };

  const handleAdd = () => {
    // Logic to add a new book
    Alert.alert('Add', 'Adding a new book');
  };

  const handleDelete = () => {
    // Logic to delete current book
    Alert.alert('Delete', 'Deleting from current book');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="View Current Book" onPress={handleViewCurrentBook} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add On" onPress={handleAdd} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Delete" onPress={handleDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginBottom: 10, // Adjust the space between buttons as needed
    width: '80%', // Adjust the width of the button container as needed
  },
});

export default BookManagementPage;
