import { SafeAreaView,View, Text, Image, StyleSheet } from 'react-native';
import React from 'react'


export default ProfilePage=()=>{
    const user= {
        name:"Vrinda",
        entryNumber:"2021MCB1223",
        profilePhoto:require('../../assets/profileimg.jpg'),
        lostAndFoundLogs:[
            {id:1, item: "Lost Wallet", date: "2024-02-28"},
            { id: 2, item: "Found Keys", date: "2024-02-27" }
        ],
        queryLogs: [
            { id: 1, query: "I can find the book- Optimization Techniques by Suresh Chandra?", date: "2024-02-26" },
            { id: 2, query: "How to issue a book?", date: "2024-02-25" }
          ]
    }
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Image source={require("../../assets/booksLogo.png")} style={styles.logo} />
            <Text style={styles.subtitle}>WELCOME TO</Text>
            <Text style={styles.title}>Streamlined Library Solutions</Text>
            <View style={styles.separator} />
          </View>
    
          
          <View style={styles.content}>
            <View style={styles.profileInfo}>
              <Image source={user.profilePhoto} style={styles.profilePhoto} />
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.entryNumber}>Entry Number: {user.entryNumber}</Text>
            </View>
            
            <View style={styles.logs}>
              <Text style={styles.sectionTitle}>Lost and Found Logs</Text>
              {user.lostAndFoundLogs.map(log => (
                <View key={log.id} style={styles.logItem}>
                  <Text style={styles.logDate}>{log.date}</Text>
                  <Text>{log.item}</Text>
                </View>
              ))}
            </View>
            
            <View style={styles.logs}>
              <Text style={styles.sectionTitle}>Query Logs</Text>
              {user.queryLogs.map(log => (
                <View key={log.id} style={styles.logItem}>
                  <Text style={styles.logDate}>{log.date}</Text>
                  <Text>{log.query}</Text>
                </View>
              ))}
            </View>
          </View>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
      },
      header: {
        alignItems: 'center',
        marginTop: 20,
        padding: 5,
        backgroundColor: 'white',
      },
      logo: {
        height: 40,
        width: 40,
        marginTop: 20,
        marginBottom: 4,
      },
      subtitle: {
        fontFamily: 'sans-serif-light',
        fontSize: 20,
        marginTop: 3,
        paddingHorizontal: 3,
        color: 'gray',
      },
      title: {
        fontFamily: 'sans-serif-semibold',
        fontSize: 24,
        padding: 3,
        color: '#0d64e5',
      },
      separator: {
        borderTopWidth: 2,
        padding: 3,
        borderTopColor: 'lightgray',
      },
      content: {
        padding: 20,
      },
      profileInfo: {
        alignItems: 'center',
        marginBottom: 20,
      },
      profilePhoto: {
        width: 120,
        height: 120,
        borderRadius: 60,
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
      },
      entryNumber: {
        color: 'gray',
        marginTop: 5,
      },
      logs: {
        marginBottom: 20,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      logItem: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingVertical: 10,
      },
      logDate: {
        fontSize: 14,
        color: 'gray',
      },
    });


