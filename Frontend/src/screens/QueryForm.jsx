import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, KeyboardAvoidingView, Keyboard, SafeAreaView, TouchableOpacity } from 'react-native';
import QueryAnimation from "./../component/QueryAnimation";
import axios from 'axios'; 
import AsyncStorage from "@react-native-async-storage/async-storage";
const QueryForm = () => {
    const [query, setQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('');

    const handleSubmit = async () => {
        Keyboard.dismiss();
        
        try {
            // Get the token from AsyncStorage
            const token = await AsyncStorage.getItem("token");
            console.log("tokenn : ", token);
            // Send the query data to the server
            const response = await axios.post('http://192.168.137.1:3000/form/send-query', {
                query: query,
                emailToken: token, // Add the email if required
            });
            console.log(response.data);
            console.log('Query submitted successfully');
            setSubmittedQuery(query);
        } catch (error) {
            console.error('Error submitting query:', error);
            // Handle error state if necessary
        }
    };

    return (
        <SafeAreaView className="bg-blue-100 h-full">
            <KeyboardAvoidingView >
                <View className="items-center mt-16 p-5">
                    <View className="h-40 w-40 mt-20 mb-8 mx-2">
                        <QueryAnimation />
                    </View>
                    <View>
                        <Text className="text-2xl font-bold text-[#407bff] mt-6">Submit Query</Text>
                    </View>
                    <View>
                        <TextInput
                            className="border border-gray-400 bg-white rounded-md h-32 w-72 items-center px-4 py-2 m-4 file:mb-4"
                            onChangeText={txt => setQuery(txt)}
                            value={query}
                            placeholder="Enter your query"
                            multiline
                        />
                    </View>
                    <View>
                        <View>
                        <TouchableOpacity
                            className="bg-[#407bff] p-3 rounded-md items-center mt-2"
                            onPress={handleSubmit}
                        >
                            <Text className="text-white font-semibold text-lg">Submit</Text>
                        </TouchableOpacity>
                        </View>
                        <View>
                        {submittedQuery !== '' && (
                            <View className="border-2 border-gray-300 p-4 mt-4 rounded-md bg-slate-100">
                                <Text className="font-light text-center mb-2 text-black">SUBMITTED QUERY:</Text>
                                <Text className="text-md text-center">{submittedQuery}</Text>
                            </View>
                        )}
                        </View>
                    </View>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default QueryForm;
