import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Button, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Platform, Keyboard } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import SvgLost from '../../Lost.js';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {IP_ADDRESS} from '@env'

const LostAndFound = () => {
  const [image, setImage] = useState(null);
  const [submittedImage, setSubmittedImage] = useState('');
  const [location, setLocation] = useState('');
  const [submittedLocation, setSubmittedLocation] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [submittedDescription, setSubmittedDescription] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = async () => {

    Keyboard.dismiss();


    try {
      // Get the token from AsyncStorage
      const token = await AsyncStorage.getItem("token");
      console.log("tokenn : ", token);
      // Send the query data to the server
      const response = await axios.post(`http://${IP_ADDRESS}:3000/form/send-lf-query`, {
        image: image,
        description: description,
        location: location,
        time: time,
        emailToken: token, // Add the email if required
      });
      console.log(response.data);
      console.log('Query submitted successfully');
      setSubmittedDescription(description);
      setSubmittedImage(image);
      setSubmittedLocation(location);
      const formattedTime = date.toLocaleString();
      setTime(formattedTime);
      console.log('Image:', image);
      console.log('Location:', location);
      console.log('Time:', time);
      console.log('Description:', description);
    } catch (error) {
      console.error('Error submitting query:', error);
      // Handle error state if necessary
    }

  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  return (
    <SafeAreaView className="bg-blue-100 h-full">
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {/* <ImageBackground
        source={require('../../assets/lostfound.png')}
        style={styles.backgroundImage}
      > */}
        <View style={styles.container}>
          <View style={styles.svgContainer}>
            <SvgLost height={100} width={80} />
          </View>
          <Text style={[styles.heading, styles.svgHeading]}>Lost and Found</Text>
          <Button title="Pick an image from gallery" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={text => setLocation(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            multiline
            value={description}
            onChangeText={text => setDescription(text)}
          />
          <View>
            <View style={styles.buttonContainer}>
              <Button onPress={showDatepicker} title="Select Date" />
            </View>
            {/* {(
            <View style={styles.submittedQueryContainer}>
            <Text style={styles.submittedQueryTitle}>Submitted Query:</Text>
            <Text style={styles.submittedQuery}>{submittedQuery}</Text>
            </View>
        )} */}
            {showPicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          {/* <Button title="Submit" onPress={handleSubmit} color="#000000" buttonStyle={styles.btn}/> */}
          <TouchableOpacity style={[styles.btn, styles.submitButton]} onPress={handleSubmit}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>

          {submittedDescription != '' && submittedLocation != '' && (
            <View style={styles.submittedContainer}>
              <Text style={styles.submittedQueryTitle}> Submitted Details:</Text>
              <Text style={styles.submittedQuery}> Location: {submittedLocation}</Text>
              <Text style={styles.submittedQuery}> Description : {submittedDescription}</Text>
              {/* <Text style={styles.submittedQuery}> ImageAttached : {submittedImage}</Text>*/}
              {submittedImage && (
                <Image source={{ uri: submittedImage }} style={styles.submittedImage} />
              )}
              <Text style={styles.submittedQuery}>Time: {time}</Text>
            </View>
          )}
        </View>
        {/* </View>
      </ImageBackground> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAF6FF',
    padding: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  submitButton: {
    marginTop: 20,
  },
  svgHeading: {
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#89CEFA',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 80,
  },
  btnText: {
    color: '#000000',
  },
  svgContainer: {
    padding: 10,
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  //   backgroundImage: {
  //     flex: 1,
  //     width: '100%',
  //     height: '100%',
  //     resizeMode: 'cover', // or 'stretch' or 'contain'
  //   },
  //   overlay: {
  //     flex: 1,
  //     backgroundColor: 'rgba(0,0,0,0.5)', // Optional overlay to make text more readable
  //   },
  heading: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  submittedContainer: {
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
  submittedImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  submittedQuery: {
    fontSize: 16,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default LostAndFound;
