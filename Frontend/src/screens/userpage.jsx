// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const userpage = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', profilePic: require('../../assets/pr.png') },
//     { id: 2, name: 'Riya Smith', profilePic: require('../../assets/female2.png') },
//     { id: 3, name: 'Alice Johnson', profilePic: require('../../assets/female2.png') },
//     { id: 4, name: 'B Brown', profilePic: require('../../assets/pr.png') },
//     { id: 5, name: 'Aarav Patel', profilePic: require('../../assets/pr.png') },
//     { id: 6, name: 'Ananya Gupta', profilePic: require('../../assets/female2.png') },
//     { id: 7, name: 'Arun Kumar', profilePic: require('../../assets/pr.png') },
//     { id: 8, name: 'Deepika Sharma', profilePic: require('../../assets/female2.png') },
//     { id: 9, name: 'Divya Singh', profilePic: require('../../assets/female2.png') },
//     { id: 10, name: 'Gaurav Mishra', profilePic: require('../../assets/pr.png') },
//     { id: 11, name: 'Jaya Desai', profilePic: require('../../assets/female2.png') },
//     { id: 12, name: 'Kriti Verma', profilePic: require('../../assets/female2.png') },
//     { id: 13, name: 'Manish Tiwari', profilePic: require('../../assets/pr.png') },
//     { id: 14, name: 'Meera Reddy', profilePic: require('../../assets/female2.png') },
//     { id: 15, name: 'Neha Gupta', profilePic: require('../../assets/female2.png') },
//     { id: 16, name: 'Pranav Singh', profilePic: require('../../assets/pr.png') },

//   ]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigation = useNavigation(); // Hook to get navigation object

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     console.log('Search query:', query);
//   };

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const deleteUser = (userId) => {
//     setUsers(users.filter(user => user.id !== userId));
//   };

//   const viewUserProfile = (user) => {
//     setSelectedUser(user);
//   };

//   const openUserProfile = (user) => {
//     // Navigate to ViewProfilePage with the selected user
//     navigation.navigate('ViewProfilePage', { user });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text className="text-lg font-bold ml-4 mb-2">Search Users</Text>
//       <View style={styles.searchContainer} className="px-4 ">
        
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search users by name..."
//           value={searchQuery}
//           onChangeText={handleSearch}
//           className="mb-4"
//         />
//         {isLoading && <ActivityIndicator size="small" color="#007bff" />}
//       </View>
//       {filteredUsers.length === 0 && !isLoading && (
//         <Text style={styles.noResultsText}>No users found</Text>
//       )}
//       {filteredUsers.map(user => (
//         <View key={user.id} style={styles.userContainer} className="px-4">
//           <Image source={user.profilePic} style={styles.profilePic} />
//           <View style={styles.userInfo}>
//             <Text style={styles.userName}>{user.name}</Text>
//           </View>
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity onPress={() => openUserProfile(user)} style={styles.actionButton}>
//               <Text style={styles.actionText}>View</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => deleteUser(user.id)} style={styles.actionButton}>
//               <Text style={styles.actionText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     paddingTop: 40, // Adjust this value to set the desired distance from the top
//     paddingHorizontal: 10,
//     paddingBottom: 20, // Adjust this value to set the desired distance from the bottom
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   searchInput: {
//     flex: 2,
//     height: 45,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   userContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 18,
//   },
//   profilePic: {
//     width: 30,
//     height: 30,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   userName: {
//     fontSize: 14,
//     fontWeight: 'semibold',
//     marginBottom: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//   },
//   actionButton: {
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//     marginLeft: 10,
//   },
//   actionText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   noResultsText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: 'gray',
//   },
// });

// export default userpage;
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserPage = () => {
  const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', profilePic: require('../../assets/pr.png') },
        { id: 2, name: 'Riya Smith', profilePic: require('../../assets/female2.png') },
        { id: 3, name: 'Alice Johnson', profilePic: require('../../assets/female2.png') },
        { id: 4, name: 'B Brown', profilePic: require('../../assets/pr.png') },
        { id: 5, name: 'Aarav Patel', profilePic: require('../../assets/pr.png') },
        { id: 6, name: 'Ananya Gupta', profilePic: require('../../assets/female2.png') },
        { id: 7, name: 'Arun Kumar', profilePic: require('../../assets/pr.png') },
        { id: 8, name: 'Deepika Sharma', profilePic: require('../../assets/female2.png') },
        { id: 9, name: 'Divya Singh', profilePic: require('../../assets/female2.png') },
        { id: 10, name: 'Gaurav Mishra', profilePic: require('../../assets/pr.png') },
        { id: 11, name: 'Jaya Desai', profilePic: require('../../assets/female2.png') },
        { id: 12, name: 'Kriti Verma', profilePic: require('../../assets/female2.png') },
        { id: 13, name: 'Manish Tiwari', profilePic: require('../../assets/pr.png') },
        { id: 14, name: 'Meera Reddy', profilePic: require('../../assets/female2.png') },
        { id: 15, name: 'Neha Gupta', profilePic: require('../../assets/female2.png') },
        { id: 16, name: 'Pranav Singh', profilePic: require('../../assets/pr.png') },
    
      ]); // Your user data
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Search query:', query);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const openUserProfile = (user) => {
    navigation.navigate('ViewProfilePage', { user });
  };

  return (
    <View style={styles.container}>
      <View className="px-6" style={styles.searchContainer}>
        <Text style={styles.title}>Search Users</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search users by name..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {isLoading && <ActivityIndicator size="small" color="#007bff" />}
      </View>
      <ScrollView className="px-6" style={styles.userList}>
        {filteredUsers.length === 0 && !isLoading && (
          <Text style={styles.noResultsText}>No users found</Text>
        )}
        {filteredUsers.map(user => (
          <View key={user.id} style={styles.userItem}>
            <Image source={user.profilePic} style={styles.profilePic} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => openUserProfile(user)} style={styles.actionButton}>
                <Text style={styles.actionText}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteUser(user.id)} style={styles.actionButton}>
                <Text style={styles.actionText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:20,
    padding:10
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  userList: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'semibold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  noResultsText: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
});

export default UserPage;
