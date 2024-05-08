

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthAnimation from '../component/AuthAnimation';
import axios from "axios"
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {IP_ADDRESS} from "@env"
export default function Login() {
const navigation = useNavigation();
const [email, setEmail] = useState('');
const [otp, setOtp] = useState(['', '', '', '', '', '']);

  
console.log("ip",IP_ADDRESS)
console.log("process",process.env);
  const handleSendOtp = async () => {
    console.log("email", email);
    
    try {
      const response = await axios.post(`http://${IP_ADDRESS}:3000/client/send-otp`, {
        email,
        // Assuming isAdmin is initially false for regular users
      });
      console.log("check");
      console.log(response.status);
      
      if (response.status === 200) {
        Alert.alert('OTP sent', 'Please check your inbox/spam folder');
       
      } else {
        console.log(response.status)
        Alert.alert('Process failed', 'Please try again later.');
        
      }
    } catch (error) {
      
      console.error('Error during login:', error);
      Alert.alert('Error during login', 'Please try again later.');
    }
  };

  const handleVerifyOtp = async () => {
    console.log("email", email);
    string_otp = otp.join('');
    console.log("otp : ", string_otp);
    try {
      console.log(IP_ADDRESS);
      const response = await axios.post(`http://${IP_ADDRESS}:3000/client/verify-otp`, {
        email, otp : string_otp
        // Assuming isAdmin is initially false for regular users
      });
      console.log(response.data);
      
      if (response.status == 200) {
        Alert.alert('Verification complete', 'You are logged in');
        const token = await AsyncStorage.setItem("token", response.data.data);
        const isLoggedIn = await AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
        console.log(isLoggedIn);
        if(email == "dep2k24@gmail.com"){
          setTimeout(() => {
            navigation.navigate("AdminProfile");
          }, 1000); 
        }
        setTimeout(() => {
          navigation.navigate("homePage");
        }, 1000); 
       
      } else {
        console.log(response.status)
        Alert.alert('Wrong otp', 'Please try again.');
      }
    } catch (error) {
      
      console.error('Error during login:', error);
      Alert.alert('Error during login', 'Please try again later.');
    }
  

  };

  const handleOtpChange = (index, value) => {
    if (!isNaN(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5 && value !== '') {
        TextInput[`box${index + 1}`].focus();
      }
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <View style={{ width: '80%' }}>
          <View style={{ padding: 3 }}>
            <AuthAnimation />
          </View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#0d64e5', marginTop: 150, marginBottom: 18 }}>Login to LibConnect</Text>

          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 16}}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity
            style={{ backgroundColor: '#0976f1', paddingVertical: 12, borderRadius: 10, marginBottom: 10, alignItems: 'center' }}
            onPress={handleSendOtp}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Send OTP</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row' , marginLeft : 28}}>
            {[...Array(6)].map((_, index) => (
              <TextInput
                key={index}
                style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10, width: 40, textAlign: 'center', marginRight: 5 }}
                keyboardType="numeric"
                maxLength={1}
                value={otp[index]}
                onChangeText={(value) => handleOtpChange(index, value)}
                ref={(input) => (TextInput[`box${index}`] = input)}
                onSubmitEditing={() => handleVerifyOtp()}
              />
            ))}
          </View>

          <TouchableOpacity
            style={{ backgroundColor: '#0976f1', paddingVertical: 12, borderRadius: 10, marginBottom: 10, alignItems: 'center' }}
            onPress={() => handleVerifyOtp()}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
