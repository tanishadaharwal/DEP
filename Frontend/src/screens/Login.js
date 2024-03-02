import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthAnimation from '../component/AuthAnimation';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    if (email.endsWith('iitrpr.ac.in')) {
      // Proceed with registration logic
      // For demonstration purposes, let's show an alert
      Alert.alert('Login Successful', 'Thank you for registering!');
    } else {
      Alert.alert('Invalid Email', 'Please use a valid institute email id');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center justify-center h-full">
        <View className="w-4/5">
          <View className="p-3"><AuthAnimation /></View>
          <Text className="text-2xl font-semibold text-center text-[#0d64e5] mt-24 mb-8">Login to App Name</Text>

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

          <View className="flex-row">
            <View className="p-2"><TextInput
            className="border border-gray-400 rounded-md px-2 py-2 mb-4 w-9 text-center" placeholder="X"/></View>
            <View className="p-2"><TextInput
            className="border border-gray-400 rounded-md px-2 py-2 mb-4 w-9 text-center" placeholder="X"/></View>
            <View className="p-2"><TextInput
            className="border border-gray-400 rounded-md px-2 py-2 mb-4 w-9 text-center" placeholder="X"/></View>
            <View className="p-2"><TextInput
            className="border border-gray-400 rounded-md px-2 py-2 mb-4 w-9 text-center" placeholder="X"/></View>
            <View className="p-2"><TextInput
            className="border border-gray-400 rounded-md px-2 py-2 mb-4 w-9 text-center" placeholder="X"/></View>
            <View className="p-2"><TextInput
            className="border border-gray-400 rounded-md px-2 py-2 mb-4 w-9 text-center" placeholder="X"/></View>
          </View>


          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-md items-center mt-3"
            onPress={handleLogin}
          >
            <Text className="text-white font-semibold text-lg">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
