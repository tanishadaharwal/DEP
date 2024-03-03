import { View, Text, SafeAreaView,TouchableOpacity,Pressable,Image } from "react-native";
import React,{useState} from "react";
import { useNavigation } from "@react-navigation/native";

export default function LibraryPage() {

    const groundFloor=[
        {
            name:'Reading Room',
            page:'readingRoom',
        },
        {
            name:'LB 1',
            page:'lb1',
        },
        {
            name:'Common Room',
            page:'commonRoom1',
        }
    ]

    const firstFloor=[
        {
            name:'Study Room',
            page:'studyRoom',
        },
        {
            name:'Discussion Room',
            page:'discussionRoom',
        },
        {
            name:'Electronic Lab',
            page:'electronicLab',
        },
        {
            name:'Common Room',
            page:'commonRoom2',
        }
    ]

  return (
    <SafeAreaView className="flex items-center justify-around bg-gray-950 m-auto pt-5 h-full mb-0 w-screen text-center">
    
      <View className='w-full items-center'>
        <View className='w-[75%] bg-[#E8E8E8] opacity-80 p-3 border-10 rounded-full border-gray-700 shadow-2xl shadow-white'>
            <Text className='text-center font-extrabold text-2xl' >Ground FLOOR</Text>
        </View>
        <View className='justify-around w-[90%] flex-row py-10 bg-gray-950 border-20 m-3 rounded-xl flex-wrap '>
            {groundFloor.map((room)=>(
                <Card name={room.name} page={room.page} key={room.page} color={room.color}/>
            ))}
        </View>
      </View>



      <View className='w-full items-center'>
        <View className='w-[75%] bg-[#E8E8E8] opacity-80 p-3 border-2 rounded-full border-gray-700 shadow-2xl shadow-white'>
            <Text className='text-center font-extrabold text-2xl' >FIRST FLOOR</Text>
        </View>
        <View className='justify-around w-[90%] flex-row flex-wrap py-10 bg-gray-950 border-20 m-3 rounded-xl '>
            {firstFloor.map((room)=>(
                <Card name={room.name} page={room.page} key={room.page} color={room.color}/>
            ))}
        </View>
      </View>

    </SafeAreaView>
  );
}

const Card=({name,page,color})=>{
    const navigation = useNavigation();
    const [pressed,setPressed]=useState(false)
    const handlePress=()=>{
        setPressed(true)
        navigation.navigate(page)
    }

    return (
        // <Text className='text-white'>Hello</Text>
        <Pressable onPress={()=>navigation.navigate(page)} onPressIn={()=>setPressed(true)} onPressOut={()=>setPressed(false)} className='shadow-2xl w-[40%] shadow-white m-2'>
             <View className={`w-full rounded-2xl justify-center h-20 text-center border-2 border-slate-800 bg-slate-800 shadow-2xl shadow-white  ${pressed?'  scale-110 opacity-50':''}`} onPress={()=>navigation.navigate(page)} ><Text className='text-center text-white font-bold text-md'>{name}</Text></View>
             
        </Pressable>
    )
}
