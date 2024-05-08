import React, { useState, useRef } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

const Notification = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([
        { id: 1, title: 'Notification 1', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 2, title: 'Notification 2', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 3, title: 'Notification 3', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 4, title: 'Notification 4', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 1, title: 'Notification 1', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 2, title: 'Notification 2', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 3, title: 'Notification 3', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 4, title: 'Notification 4', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 1, title: 'Notification 1', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 2, title: 'Notification 2', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 3, title: 'Notification 3', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 4, title: 'Notification 4', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 4, title: 'Notification 4', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 1, title: 'Notification 1', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 2, title: 'Notification 2', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 3, title: 'Notification 3', message: 'This is notification 1', timestamp: '10:00 AM' },
        { id: 4, title: 'Notification 4', message: 'This is notification 1', timestamp: '10:00 AM' },
        // Add more sample data as needed
    ]);

    const timerRef = useRef(null); // Reference for the timer

    // Function to handle search
    const handleSearch = (text) => {
        setSearchText(text);
    };

    // Function to handle deletion of notification
    const handleDelete = (id) => {
        Alert.alert(
            'Confirm Delete',
            'Are you sure you want to delete this notification?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', onPress: () => deleteNotification(id) }
            ]
        );
    };

    // Function to delete notification
    const deleteNotification = (id) => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    };

    // Function to navigate to notification detail screen
    const navigateToDetail = (item) => {
        navigation.navigate('NotificationDetailScreen', { notification: item });
    };

    // Start the timer when the touch begins
    const handleTouchBegin = () => {
        timerRef.current = setTimeout(() => {
            // After 5 seconds, show the delete button
            // Implement logic to show the delete button here
        }, 5000); // 5000 milliseconds = 5 seconds
    };

    // Clear the timer when the touch ends
    const handleTouchEnd = () => {
        clearTimeout(timerRef.current);
    };
    
    // Render notification item
    const renderItem = ({ item }) => (
        <TouchableWithoutFeedback
            onPress={() => navigateToDetail(item)}
            onTouchStart={handleTouchBegin}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
        >
            <View style={styles.rowFront}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{item.title}</Text>
                    <Text style={{ color: 'gray' }}>{item.timestamp}</Text>
                </View>
                <Text>{item.message}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

    // Render hidden delete button
    const renderHiddenItem = ({ item }) => (
        <View style={styles.rowBack}>
            <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                <Text style={{ color: 'white' }}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1, paddingTop: 40 }}>
            <Text className="text-lg font-bold ml-4 mt-1 mb-2">Your Notifications</Text>
            <View style={{ padding: 10 }} className="px-6">
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 5 }}
                    placeholder="Search..."
                    onChangeText={handleSearch}
                    value={searchText}
                    className="rounded-xl"
                />
            </View>
            <SwipeListView
                data={searchText.length > 0 ? data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()) || item.message.toLowerCase().includes(searchText.toLowerCase())) : data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-75}
                disableRightSwipe={true}
                className="px-6 rounded-lg"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    rowFront: {
        backgroundColor: '#FFF',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    rowBack: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: '100%',
    },
});

export default Notification;
