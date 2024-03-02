import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
          <Text className="text-4xl font-bold text-center mb-8">Login to App Name</Text>

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

         
          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-md items-center"
            onPress={handleLogin}
          >
            <Text className="text-white font-semibold text-lg">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
