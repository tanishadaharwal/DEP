// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const NotificationDetailScreen = ({ route }) => {
//   // Realistic dummy notification data
//   const notification = {
//     senderName: 'John Doe',
//     senderEmail: 'johndoe@example.com',
//     title: 'New Email Received',
//     message: 'You have received a new email from John Doe. Please review it and respond at your earliest convenience. Thank you.',
//     timestamp: 'May 7, 2024 09:23 AM', // Realistic timestamp
//   };

//   // Extracting notification from route params if available
//   const { notification: routeNotification } = route.params || {};

//   // Merging route notification data with dummy data
//   const mergedNotification = { ...notification, ...routeNotification };

//   // Handler for reply button
//   const handleReply = () => {
//     // Logic for reply action
//     console.log('Reply clicked');
//   };

//   // Handler for forward button
//   const handleForward = () => {
//     // Logic for forward action
//     console.log('Forward clicked');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{mergedNotification.title}</Text>
//       <View style={styles.senderContainer}>
//         <Text style={styles.senderName}>{mergedNotification.senderName}</Text>
//         <Text style={styles.senderEmail}>&lt;{mergedNotification.senderEmail}&gt;</Text>
//       </View>
//       <Text style={styles.message}>{mergedNotification.message}</Text>
//       <Text style={styles.timestamp}>{mergedNotification.timestamp}</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity onPress={handleReply} style={styles.button}>
//           <Text style={styles.buttonText}>Reply</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleForward} style={styles.button}>
//           <Text style={styles.buttonText}>Forward</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginTop:28,
//     marginBottom:8,
//     color: '#202124', // Gmail's title color
//   },
//   senderContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   senderName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 4,
//     color: '#202124', // Gmail's title color
//   },
//   senderEmail: {
//     color: '#202124', // Gmail's title color
//   },
//   message: {
//     fontSize: 16,
//     marginBottom: 8,
//     color: '#202124', // Gmail's text color
//   },
//   timestamp: {
//     fontSize: 14,
//     color: '#5f6368', // Gmail's timestamp color
//     marginBottom: 16,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     backgroundColor: '#007bff', // Gmail's button color
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 4,
//   },
//   buttonText: {
//     color: '#fff', // Button text color
//     fontWeight: 'bold',
//   },
// });

// export default NotificationDetailScreen;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const NotificationDetailScreen = ({ route }) => {
  // Dummy notification data
  const notification = {
    senderName: 'John Doe',
    senderEmail: 'johndoe@example.com',
    title: 'New Email Received',
    message: 'You have received a new email from John Doe. Please review it and respond at your earliest convenience. Thank you.',
    timestamp: 'May 7, 2024 09:23 AM',
  };

  // Extracting notification from route params if available
  const { notification: routeNotification } = route.params || {};

  // Merging route notification data with dummy data
  const mergedNotification = { ...notification, ...routeNotification };

  // Handler for reply button
  const handleReply = () => {
    const emailSubject = `Re: ${mergedNotification.title}`;
    const emailBody = ''; // You can populate the email body if needed
    const emailUrl = `mailto:${mergedNotification.senderEmail}?subject=${emailSubject}&body=${emailBody}`;

    Linking.openURL(emailUrl);
  };

  // Handler for forward button
  const handleForward = () => {
    const emailSubject = mergedNotification.title;
    const emailBody = ''; // You can populate the email body if needed
    const emailUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;

    Linking.openURL(emailUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{mergedNotification.title}</Text>
      <View style={styles.senderContainer}>
        <Text style={styles.senderName}>{mergedNotification.senderName}</Text>
        <Text style={styles.senderEmail}>&lt;{mergedNotification.senderEmail}&gt;</Text>
      </View>
      <Text style={styles.message}>{mergedNotification.message}</Text>
      <Text style={styles.timestamp}>{mergedNotification.timestamp}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleReply} style={styles.button}>
          <Text style={styles.buttonText}>Reply</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForward} style={styles.button}>
          <Text style={styles.buttonText}>Forward</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 8,
    color: '#202124',
  },
  senderContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  senderName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 4,
    color: '#202124',
  },
  senderEmail: {
    color: '#202124',
  },
  message: {
    fontSize: 16,
    marginBottom: 8,
    color: '#202124',
  },
  timestamp: {
    fontSize: 14,
    color: '#5f6368',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NotificationDetailScreen;
