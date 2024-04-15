import { Image, View, Text, Button, SafeAreaView, TouchableOpacity, StyleSheet, Animated, Dimensions } from "react-native";
import Animation from "../component/Animation";
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from "axios"
import { useNavigation } from "@react-navigation/native";
import {useEffect, useRef} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {IP_ADDRESS} from '@env'

const { width } = Dimensions.get('window');

export default function HomePage() {
    const navigation = useNavigation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [seatStatus, setSeatStatus] = useState('');
    const [seatOccupied, setSeatOccupied] = useState('');
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const drawerAnimation = useRef(new Animated.Value(-width)).current;
    const handleLogout = async () => {
        try {
            // Clear the token from AsyncStorage
            await AsyncStorage.setItem("token", '');
            await AsyncStorage.setItem("isLoggedIn", '');
            // Navigate to the landing page or login page
            navigation.navigate("landingPage");
            // You can use useNavigation hook to navigate
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
    useEffect(() => {
        const getUserData = async () => {
            try {
                // Get the token from AsyncStorage
                const token = await AsyncStorage.getItem("token");
                console.log("tokennn : ", token);
                // Make the API request to get user data using the token
                const response = await axios.get(`http://${IP_ADDRESS}:3000/client/get-user-data/${token}`);
                const { seatStatus, seatOccupied } = response.data;
                setSeatStatus(seatStatus);
                // setSeatOccupied(seatOccupied);


                // Log the response
                console.log("User Data:", response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        // Call the getUserData function when the component mounts
        getUserData();

        Animated.timing(drawerAnimation, {
            toValue: drawerOpen ? 0 : -width,
            duration: 300,
            useNativeDriver: false
        }).start();
    }, [drawerOpen]);
    return (
        <>
            <SafeAreaView className="bg-white h-full">
            {drawerOpen && (
                <View className="absolute top-0 bottom-0 w-[75%] bg-[#d5e2fd] border-r-2 border-r-[#d5e2fd] z-10">
                    <View className="pl-7 pt-32">
                        <TouchableOpacity className="flex-row mr-7 pb-2 border-b-2 border-b-slate-400" onPress={()=> navigation.navigate("profilePage")}>
                            <Ionicons name="person" size={28}></Ionicons>
                            <Text className="font-medium tracking-widest text-xl pt-[0.75] px-3 text-grey-30">Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row mr-7 mt-3 pb-2 border-b-2 border-b-slate-400" onPress={() => navigation.navigate('libraryPage')}>
                            <Ionicons name="book" size={28}></Ionicons>
                            <Text className="font-medium tracking-widest text-xl pt-[0.75] px-3 pl-[14.5] text-grey-30">Seats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row mr-7 mt-3 pb-2 border-b-2 border-b-slate-400" onPress={()=> navigation.navigate("lostFoundForm")}>
                            <Ionicons name="archive" size={28}></Ionicons>
                            <Text className="font-medium tracking-widest text-xl pt-[0.75] px-3 pl-[14.5] text-grey-30">Lost & Found</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row mr-7 mt-3 pb-2 border-b-2 border-b-slate-400" onPress={()=> navigation.navigate("queryForm")}>
                            <Ionicons name="help-circle" size={28}></Ionicons>
                            <Text className="font-medium tracking-widest text-xl pt-[0.75] px-3 pl-[14.5] text-grey-30">Query Form</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleLogout} className=" flex-row mt-96 pl-7 pt-2 mr-7 ml-7 pb-2 space-x-4 border-t-2 border-t-slate-400">
                            <Ionicons name="log-out" size={28}></Ionicons>
                            <Text className="font-medium tracking-widest text-xl text-grey-30">Logout</Text>
                        </TouchableOpacity>
                </View>
            )}
                <TouchableOpacity className="absolute top-0 left-0 z-10 pt-3 pr-3 pb-3" onPress={toggleDrawer}>
                    <View className="pl-6 pt-10"><Ionicons name="menu" size={30}></Ionicons></View>
                </TouchableOpacity>
                <View className="items-center mt-16 p-5 bg-white">
                    <View className="h-40 w-40 mt-14 mb-8 mx-2"><Animation /></View>
                    <View>
                        <Text className="font-light tracking-widest text-l pt-16 px-3 text-grey-30">TIME IN :</Text>
                        <Text className="font-semibold text-xl p-3 text-[#83abfb]">1:37:45</Text>
                    </View>
                    <View className="border-t-2 p-3 border-neutral-100">
                        <Text className="font-light tracking-widest text-l pt-7 px-3 text-grey-30">SEAT STATUS :</Text>
                    </View>
                    <View><Text className="font-semibold text-xl p-1 text-[#3772ff]">{seatStatus === true ? "Occupied" : "Not Occupied"}</Text></View>
                    <View className=" pb-3">
                        <Text className="font-light tracking-widest text-l pt-7 px-3 text-grey-30">SEAT OCCUPIED :</Text>
                    </View>
                    <View><Text className="font-semibold text-xl p-1 text-[#83abfb]">{seatStatus === true ? seatOccupied : "None"}</Text></View>
                </View>

            </SafeAreaView>
        </>
    )
}
