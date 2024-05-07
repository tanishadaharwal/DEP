import { View, Text,TouchableOpacity,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Chair } from '../component/Chair'
import axios from 'axios'
import {IP_ADDRESS} from '@env'
import {getSeatsByRoom,updateSeatStatus} from "../api/seatAPI";

export default function ElectronicLab() {

    const navigation=useNavigation()
    const roomName = "ElecLab";
    const [seats, setSeats] = useState([]);

    useEffect(() => {
      const fetchSeats = async () => {
          try {
            const seatsData = await getSeatsByRoom(roomName);
            console.log(seatsData);
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
    <View className='w-screen h-screen bg-zinc-50'>
        <View className="w-full bg-black h-[10%] items-center p-5 flex-row ">
        <TouchableOpacity onPress={() => navigation.navigate("homePage")}>
          <Image
            source={require("../../assets/booksLogo.png")}
            className="w-10 h-10 m-3"
          />
        </TouchableOpacity>
        <Text className="  text-white font-extrabold bg-black text-2xl ">
          ELECTRONIC LAB
        </Text>
      </View>

      <View className='w-screen h-[90%] flex-row gap-2'>
        <View className='basis-1/3 h-[100%]'>
            <View className='w-[100%] basis-1/3 bg-white border border-gray-300 shadow-sm shadow-black  justify-center'>
                 <RoundTable seatId={[seats[0],seats[1],seats[2],seats[3]]} handleClick={handleClick}/>
            </View>
            <View className='w-[100%] basis-1/3 bg-white border border-gray-300 shadow-sm shadow-black justify-center'>
                 <RoundTable seatId={[seats[4],seats[5],seats[6],seats[7]]} handleClick={handleClick}/>
            </View>
            <View className='w-[100%] basis-1/3 bg-white border border-gray-300 shadow-sm shadow-black justify-center'>
                 <RoundTable seatId={[seats[8],seats[9],seats[10],seats[11]]} handleClick={handleClick}/>
            </View>
       
        </View>

        <View className='basis-2/3 h-[100%] justify-center bg-white shadow-lg border border-gray-300 shadow-gray-800'>
            <View className='w-[110%] h-[60%] justify-center items-center rotate-45'>
                <View className='w-[1.5%] shadow-md  border shadow-black absolute mx-auto h-[50%] bg-gray-800 rotate-45 z-10'></View>
                <RoundTable seatId={[seats[12],seats[13],seats[14],seats[15]]} handleClick={handleClick}/>
                <View className='w-[1.5%] absolute  border shadow-md  shadow-blue-900 mx-auto h-[50%] bg-gray-800 -rotate-45 z-10'></View>
            </View>
            <View className='w-[110%] h-[60%]  justify-center items-center rotate-45'>
            <View className='w-[1.5%] shadow-md  border shadow-black absolute mx-auto h-[50%] bg-gray-800 rotate-45 z-10'></View>

                <RoundTable seatId={[seats[16],seats[17],seats[18],seats[19]]} handleClick={handleClick}/>
                <View className='w-[1.5%] shadow-md  border shadow-black absolute mx-auto h-[50%] bg-gray-800 -rotate-45 z-10'></View>

            </View>

        </View>
        

      </View>
      <View className='absolute bottom-0 w-[30%] h-[5%] border border-gray-300 left-[40%] bg-gray-300 rounded-t-3xl justify-center items-center'>
            <Text className='font-extrabold text-white text-center'>ENTRY</Text>
      </View>

    </View>
  )
}

  const RoundTable=({seatId,handleClick})=>{
    return (
        <View className='w-full h-[50%] justify-around items-center z-0'>
            <View className='w-[16%] self-center'><Chair seatId={seatId[0]} handleClick={handleClick}/></View>
            <View className='w-[80%] h-[40%] self-center flex-row justify-around items-center'>
                <View className='w-[20%]'>

                <Chair seatId={seatId[1]} handleClick={handleClick}/>
                </View>
                <Image source={require('../../assets/mug.png')} className='w-[30%] aspect-square justify-center'/>
                <View className='w-[20%]'>

                <Chair seatId={seatId[2]} handleClick={handleClick}/>
                </View>
            </View>
            <View className='w-[16%] self-center'><Chair seatId={seatId[3]} handleClick={handleClick}/></View>
            
        </View>
    )
}
