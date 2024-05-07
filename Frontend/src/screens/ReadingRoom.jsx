import { View, Text,SafeAreaView,Button,Pressable,Image,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from "@react-navigation/native";
import {getSeatsByRoom,updateSeatStatus} from "../api/seatAPI";
import { Chair } from '../component/Chair';

export default function ReadingRoom() {

    const navigation = useNavigation();
    const roomName = "ReadingRoom";
  const [seats,setSeats]=useState([]);

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
    <SafeAreaView className='w-screen h-screen bg-gray-400 m-0 pb-0'>
        <View className='w-full bg-black h-[10%] items-center p-5 flex-row '>
        <TouchableOpacity onPress={() => navigation.navigate('homePage')}>
    <Image source={require('../../assets/booksLogo.png')} className='w-10 h-10 m-3' />
    </TouchableOpacity>
      <Text className='  text-white font-extrabold bg-black text-2xl '>Reading Room</Text>
        </View>
      <View className='w-full h-[80%] '>
        <View className='flex-row w-full h-[20%] justify-center'>
            {/* {/* <View className='w-[50%] h-full'><Text>Chair</Text></View> */}
            <View className='w-[48%] h-full border-5 m-1 '>
            <Table n={4} seatId1={[seats[0],seats[1],seats[2],seats[3]]} seatId2={[seats[4],seats[5],seats[6],seats[7]]} handleClick={handleClick}/>
             </View> 
             <View className='w-[48%] h-full border-5 m-1 border-black '>
            <Table n={4} seatId1={[seats[8],seats[9],seats[10],seats[11]]} seatId2={[seats[12],seats[13],seats[14],seats[15]]} handleClick={handleClick}/>
             </View> 
        </View>
        <View className='flex-row w-full  h-[80%] '>
            <View className='w-[40%] flex-col h-full flex justify-center'>
                <Table n={2} h={1} seatId1={[seats[16],seats[17]]} seatId2={[seats[18],seats[19]]} handleClick={handleClick}/>
                <Table n={2} h={1} seatId1={[seats[20],seats[21]]} seatId2={[seats[22],seats[23]]} handleClick={handleClick}/>
                <Table n={2} h={1} seatId1={[seats[24],seats[25]]} seatId2={[seats[26],seats[27]]} handleClick={handleClick}/>
                <Table n={2} h={1} seatId1={[seats[28],seats[29]]} seatId2={[seats[30],seats[31]]} handleClick={handleClick}/>
            </View>
            
            <View className='w-[30%] h-[50%] bg-cyan-900 border-2 border-cyan-500 justify-center self-center rounded-2xl' >
                <Text className='-rotate-90 text-white font-bold text-lg'>BOOK SHELF</Text>
                
            </View>
          
            <View className='w-[40%] flex-col h-full flex justify-center'>
                    <Table n={2} h={1} seatId1={[seats[32],seats[33]]} seatId2={[seats[34],seats[35]]} handleClick={handleClick}/>
                    <Table n={2} h={1} seatId1={[seats[36],seats[37]]} seatId2={[seats[38],seats[39]]} handleClick={handleClick}/>
                    <Table n={2} h={1} seatId1={[seats[40],seats[41]]} seatId2={[seats[42],seats[43]]} handleClick={handleClick}/>
                    
            </View>
          
        </View>
      </View>

      <View className='w-[80%] self-end  h-[10%] bg-gray-100 flex-row rounded-md'>
                
                    <View className='w-[80%] justify-center'>

                   
                <View className='flex flex-row justify-around'>
                    <View className='w-[30%] flex-row '>
                        <View className='w-[30%] mx-[3%]'>

                        <Chair seatId={seats[44]} handleClick={handleClick}/>
                        </View>
                        <View className='w-[30%] mx-[3%]'>

                        <Chair seatId={seats[45]} handleClick={handleClick}/>
                        </View>
                        <View className='w-[30%] mx-[3%]'>

                        <Chair seatId={seats[46]} handleClick={handleClick}/>
                        </View>
                    </View>
                    <View className='w-[30%] flex-row'>
                    <View className='w-[30%]  mx-[3%]'>

                        <Chair seatId={seats[47]} handleClick={handleClick}/>
                        </View>
                        <View className='w-[30%] mx-[3%]'>

                        <Chair seatId={seats[48]} handleClick={handleClick}/>
                        </View>
                        <View className='w-[30%]  mx-[3%]'>

                        <Chair seatId={seats[49]} handleClick={handleClick}/>
                        </View>
                    </View>
                
                </View>
                
                <View className='w-[90%] h-[30%] m-[2%] bg-sky-900 border-2 border-sky-200 opacity-50 rounded-xl shadow-2xl shadow-white'><Text className='font-extrabold text-white text-center text-md'>SOFA</Text></View>
                
                 </View>
                 <View className='bg-gray-300 w-[25%] h-[80%] rounded-full' ><Text className=' -rotate-90 text-gray-400 font-extrabold m-auto'>ENTRY</Text></View>
                
        </View>

    </SafeAreaView>
  )
}

const Table=({n,h,seatId1,seatId2,handleClick})=>{
    const arrayToMap = Array.from({ length: n }, (_, index) => index);

    return(
        <View className={`w-[85%] h-[25%] py-2  ${h===1?'h-[23%]':'h-[100%]'} bg-gray-100 my-[1%] mx-auto rounded-md`}>
            <View className='w-full h-full  justify-around m-auto' >
                <View className='w-full h-[30%] flex-row m-auto items-center justify-center'>
            {arrayToMap.map((item, index) => (
                <View className='w-[18%] mx-[3%]' key={index}>
                    <Chair key={index} seatId={seatId1[index]} handleClick={handleClick}/>
                    </View>
                ))}
                </View>
                <View className='w-[50%] h-[25%] rounded-sm  border-2 border-gray-700 m-auto' >
                <Image
            source={require("../../assets/table.png")}
            className="w-full h-full"
          />
                </View>
                <View className='w-full h-[30%] flex-row m-auto justify-center'>
                {arrayToMap.map((item, index) => (
                    <View className='w-[18%]  mx-[3%]' key={index}>

                        <Chair seatId={seatId2[index]} handleClick={handleClick}/>
                    </View>
                ))}
                </View>

            </View>
        </View>
    )
}

// const Chair=()=>{

//     const [pressed,setPressed]=useState(false)
   
//     return (
//         <TouchableOpacity
//           onPress={() => setPressed((prev) => !prev)}
//           className={`w-full  aspect-square rounded-full m-auto shadow-2xl shadow-white ${
//             pressed ? "bg-gray-800" : "bg-gray-300"
//           }`}
//         />
//       );
// }
