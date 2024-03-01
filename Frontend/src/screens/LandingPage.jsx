import { Image, View, Text, Button, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from 'react'

export default function LandingPage() {
    const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center mt-20 p-5 bg-white">
        <Image className="h-40 w-40 mt-20 mb-4" source={require("../../assets/booksLogo.png")}></Image>
        <Text className="font-light tracking-widest text-l pt-3 px-3 text-grey-30">WELCOME TO</Text>
        <Text className="font-semibold text-xl p-3 font-Musketeer text-[#0d64e5]">Streamlined Library Solutions</Text>
        <View className="border-t-2 p-3 border-neutral-100">
          <Text className=" font-extralight text-xs">An all-in-one solution to simplify the library experience</Text>
          <View><Button onPress={() => {
                        
                        navigation.navigate("register");
                    }} className="text-black" title="Register" color="#82E0AA"></Button></View>
                  
        </View>
        <View><Button onPress={() => {
                        
                        navigation.navigate("login");
                    }} className="text-black" title="Register" color="#82E0AA"></Button></View>
                  

      </View>

    </SafeAreaView>
  )
}
