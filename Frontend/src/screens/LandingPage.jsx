import { Image, View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from 'react'

export default function LandingPage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center mt-20 p-5 bg-white">
        <Image className="h-40 w-40 mt-20 mb-4" source={require("../../assets/booksLogo.png")}></Image>
        <Text className="font-light tracking-widest text-l pt-3 px-3 text-grey-30">WELCOME TO</Text>
        <Text className="text-3xl font-bold text-[#0d64e5] italic">LibConnect</Text>
        <View className="border-t-2 p-3 border-neutral-100">
          <Text className=" font-light text-sm">An all-in-one solution to simplify the library experience</Text>
          <View className="flex flex-col gap-2 mt-6">
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("register")}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("login")}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          </View>
          

        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0976f1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  appName: {
    fontFamily: 'Musketeer',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0d64e5',
    padding: 10,
    fontStyle: 'italic' 
  },
});