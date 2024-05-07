import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Chair } from "../component/Chair";
import {getSeatsByRoom,updateSeatStatus} from "../api/seatAPI";

export default function DiscussionRoom() {
  const navigation = useNavigation();
  const roomName = "DiscussionRoom";
  const [seats,setSeats]=useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
        try {
          const seatsData = await getSeatsByRoom(roomName);
          // console.log(seatsData);
          setSeats(seatsData);
        } catch (error) {
          console.error('Error fetching seats:', error.message);
        }
      };
      fetchSeats();
  }, []);

  const handleClick = async (seatId) => {
    try {
      const updatedSeats = await updateSeatStatus(roomName, seatId.seatNumber);
      const sortedSeats = updatedSeats.sort((a, b) => a.seatNumber - b.seatNumber);
      setSeats(sortedSeats);
    } catch (error) {
      console.error('Error updating seat status:', error.message);
    }
  };

  return (
    <View className="h-screen w-screen bg-zinc-50">
      <View className="w-full bg-black h-[10%] items-center p-5 flex-row ">
        <TouchableOpacity onPress={() => navigation.navigate("homePage")}>
          <Image
            source={require("../../assets/booksLogo.png")}
            className="w-10 h-10 m-3"
          />
        </TouchableOpacity>
        <Text className="  text-white font-extrabold bg-black text-2xl ">
          DISCUSSION ROOM
        </Text>
      </View>

      <View className="w-[100%] h-[85%] flex-wrap flex-row">
        <View className="basis-1/2 h-[20%] shadow-md rounded-full bg-white ">
          <RoundTable seatId={[seats[0],seats[1],seats[2],seats[3]]} handleClick={handleClick}/>
        </View>
        <View className="basis-1/2 h-[20%] shadow-md rounded-full bg-white">
          <RoundTable seatId={[seats[4],seats[5],seats[6],seats[7]]} handleClick={handleClick}/>
        </View>
        <View className="w-[100%] h-[20%] justify-center items-center ">
          <View className="w-[50%] h-[100%] shadow-md rounded-full bg-white">
            <RoundTable seatId={[seats[8],seats[9],seats[10],seats[11]]} handleClick={handleClick}/>
          </View>
        </View>
        <View className="basis-1/2 h-[20%] shadow-md rounded-full bg-white ">
          <RoundTable seatId={[seats[12],seats[13],seats[14],seats[15]]} handleClick={handleClick}/>
        </View>
        <View className="basis-1/2 h-[20%] shadow-md rounded-full bg-white">
          <RoundTable seatId={[seats[16],seats[17],seats[18],seats[19]]} handleClick={handleClick}/>
        </View>
        <View className="w-[100%] h-[20%] justify-center items-center ">
          <View className="w-[50%] h-[100%] shadow-md rounded-full bg-white">
            <RoundTable seatId={[seats[20],seats[21],seats[22],seats[23]]} handleClick={handleClick}/>
          </View>
        </View>
        <View className="basis-1/2 h-[20%] shadow-md rounded-full bg-white ">
          <RoundTable seatId={[seats[24],seats[25],seats[26],seats[27]]} handleClick={handleClick}/>
        </View>
        <View className="basis-1/2 h-[20%] shadow-md rounded-full bg-white">
          <RoundTable seatId={[seats[28],seats[29],seats[30],seats[31]]} handleClick={handleClick}/>
        </View>
      </View>
      <View className="h-[10%] w-fit p-[2%] rounded-full self-end bg-zinc-400 item-center justify-center">
        <Text className="text-center text-white font-bold">ENTRY</Text>
      </View>
    </View>
  );
}

const RoundTable = ({seatId,handleClick}) => {
  return (
    <View className="w-full h-full justify-around items-center">
      <View className="w-[16%] self-center">
        <Chair seatId={seatId[0]} handleClick={handleClick}/>
      </View>
      <View className="w-[80%] h-[40%] self-center flex-row justify-around items-center">
        <View className="w-[20%]">
          <Chair seatId={seatId[1]} handleClick={handleClick}/>
        </View>
        <Image
          source={require("../../assets/mug.png")}
          className="w-[30%] aspect-square justify-center"
        />
        <View className="w-[20%]">
          <Chair seatId={seatId[2]} handleClick={handleClick}/>
        </View>
      </View>
      <View className="w-[16%] self-center">
        <Chair seatId={seatId[3]} handleClick={handleClick}/>
      </View>
    </View>
  );
};
