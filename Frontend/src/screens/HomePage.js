import { Image, View, Text, Button, SafeAreaView } from "react-native";
import Animation from "../component/Animation";
//import Lottie from "lottie-react";

import React from 'react'

export default function HomePage() {
    return (
        <>
            <SafeAreaView className="bg-white h-full">
                <View className="items-center mt-20 p-5 bg-white">
                    <View className="h-40 w-40 mt-20 mb-8 mx-2"><Animation /></View>
                    <View>
                        <Text className="font-light tracking-widest text-l pt-16 px-3 text-grey-30">TIME IN :</Text>
                        <Text className="font-semibold text-xl p-3 text-red-600">1:37:45</Text>
                    </View>
                    <View className="border-t-2 p-3 border-neutral-100">
                        <Text className="font-light tracking-widest text-l pt-7 px-3 text-grey-30">SEAT OCCUPIED :</Text>
                    </View>
                    <View><Text className="font-semibold text-l p-1 text-red-600">1st Floor - GD Seat 4</Text></View>
                </View>

            </SafeAreaView>
        </>
    )
}