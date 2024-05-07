import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AuthAnimation from "../component/AuthAnimation";
import { useNavigation } from "@react-navigation/native";
import {IP_ADDRESS} from '@env'

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', 'Please make sure your passwords match.');
      return;
    }
    console.log("name", name);
    console.log("email", email);

    try {
      const response = await axios.post(`http://${IP_ADDRESS}:3000/client/create-client`, {
        name,
        email,
        isAdmin: false, // Assuming isAdmin is initially false for regular users
      });
      
      if (response.status == 201) {
        console.log(response.data);
        Alert.alert('Registration Successful', 'Thank you for registering!');
        setTimeout(() => {
          navigation.navigate("login");
        }, 2000); 
       
      } else {
        console.log(response.status)
        Alert.alert('Registration Failed', 'Failed to register. Please try again later.');
      }
    } catch (error) {
      
      console.error('Error during registration:', error);
      Alert.alert('Registration Error', 'An error occurred during registration. Please try again later.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center justify-center h-full">
        <View className="w-4/5">
          <View className="p-2 mt-10"><AuthAnimation></AuthAnimation></View>
          <Text className="text-2xl font-semibold text-[#0d64e5] text-center mt-24 mb-8">Register to LibConnect</Text>

          <TextInput
            className="border border-gray-400 rounded-md px-4 py-2 mb-4"
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            className="border border-gray-400 rounded-md px-4 py-2 mb-4"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            className="border border-gray-400 rounded-md px-4 py-2 mb-4"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TextInput
            className="border border-gray-400 rounded-md px-4 py-2 mb-4"
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity
            className="bg-[#407bff] py-3 rounded-md items-center mt-6"
            onPress={handleRegister}
          >
            <Text className="text-white font-semibold text-lg">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
