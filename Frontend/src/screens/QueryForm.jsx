import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image, KeyboardAvoidingView,Keyboard } from 'react-native';

const QueryForm = () => {
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const handleSubmit = () => {
        Keyboard.dismiss();
        setSubmittedQuery(query);

      };
    
  return (
    <KeyboardAvoidingView behavious="padding" style={styles.container}>
    <View style={styles.container}>
        <Image source={require("../../assets/query.png")} style={styles.logo} />
        {/* <Image source={require("../../assets/logo2.png")} style={styles.logo} /> */}
      <Text style={styles.title}>Submit Query</Text>
      <TextInput
        style={styles.input}
        onChangeText={txt => setQuery(txt)}
        value={query}
        placeholder="Enter your query"
        multiline
      />
      <Button title="Submit"  onPress={handleSubmit} style={styles.btn} />
      {submittedQuery !== '' && (
        <View style={styles.submittedQueryContainer}>
          <Text style={styles.submittedQueryTitle}>Submitted Query:</Text>
          <Text style={styles.submittedQuery}>{submittedQuery}</Text>
        </View>
      )}
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EAF6FF', 
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0d64e5', 
    marginBottom: 20,
  },
  btn:{
    marginBottom:30
  },
  logo: {
    height: 70,
    width: 70,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  
  submittedQueryContainer: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
  submittedQueryTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  submittedQuery: {
    fontSize: 16,
  },
});

export default QueryForm;
