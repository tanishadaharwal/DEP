import { Image, View, Text, Button, SafeAreaView } from "react-native";
import Animation from "../component/Animation";
//import Lottie from "lottie-react";
import axios from "axios"
import { useNavigation } from "@react-navigation/native";
import {useEffect, useState, React} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function HomePage() {

    useEffect(() => {
        const getUserData = async () => {
            try {
                // Get the token from AsyncStorage
                const token = await AsyncStorage.getItem("token");
                console.log("tokennn : ", token);
                // Make the API request to get user data using the token
                const response = await axios.get(`http://192.168.137.1:3000/client/get-user-data/${token}`);


                // Log the response
                console.log("User Data:", response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        // Call the getUserData function when the component mounts
        getUserData();
    }, []);
    return (
        <>
            <SafeAreaView className="bg-white h-full">
                <View className="items-center mt-16 p-5 bg-white">
                    <View className="h-40 w-40 mt-20 mb-8 mx-2"><Animation /></View>
                    <View>
                        <Text className="font-light tracking-widest text-l pt-16 px-3 text-grey-30">TIME IN :</Text>
                        <Text className="font-semibold text-xl p-3 text-[#83abfb]">1:37:45</Text>
                    </View>
                    <View className="border-t-2 p-3 border-neutral-100">
                        <Text className="font-light tracking-widest text-l pt-7 px-3 text-grey-30">SEAT STATUS :</Text>
                    </View>
                    <View><Text className="font-semibold text-xl p-1 text-[##3772ff]">Occupied</Text></View>
                    <View className=" pb-3">
                        <Text className="font-light tracking-widest text-l pt-7 px-3 text-grey-30">SEAT OCCUPIED :</Text>
                    </View>
                    <View><Text className="font-semibold text-xl p-1 text-[#83abfb]">1st Floor - GD Seat 4</Text></View>
                </View>

            </SafeAreaView>
        </>
    )
}