import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthAnimation from "../component/AuthAnimation";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (email.endsWith('iitrpr.ac.in')) {
      // Proceed with registration logic
      // For demonstration purposes, let's show an alert
      Alert.alert('Registration Successful', 'Thank you for registering!');
    } else {
      Alert.alert('Invalid Email', 'Please use a valid institute email id');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center justify-center h-full">
        <View className="w-4/5">
          <View className="p-2 mt-10"><AuthAnimation></AuthAnimation></View>
          <Text className="text-2xl font-semibold text-[#0d64e5] text-center mt-24 mb-8">Register to App Name</Text>

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
