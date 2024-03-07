import { View, Text,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'


export default function DiscussionRoom() {

    const navigation = useNavigation()

  return (
    <View className='h-screen w-screen bg-zinc-50'>
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

      <View className='w-[100%] h-[85%] flex-wrap flex-row'>
            <View className='basis-1/2 h-[20%] shadow-md rounded-full bg-white '>
                <RoundTable/>
            </View>
            <View className='basis-1/2 h-[20%] shadow-md rounded-full bg-white'>
                <RoundTable/>
            </View>
            <View className='w-[100%] h-[20%] justify-center items-center '>

                <View className='w-[50%] h-[100%] shadow-md rounded-full bg-white'>
                    <RoundTable/>
                </View>
            </View>
            <View className='basis-1/2 h-[20%] shadow-md rounded-full bg-white '>
                <RoundTable/>
            </View>
            <View className='basis-1/2 h-[20%] shadow-md rounded-full bg-white'>
                <RoundTable/>
            </View>
            <View className='w-[100%] h-[20%] justify-center items-center '>

                <View className='w-[50%] h-[100%] shadow-md rounded-full bg-white'>
                    <RoundTable/>
                </View>
            </View>
            <View className='basis-1/2 h-[20%] shadow-md rounded-full bg-white '>
                <RoundTable/>
            </View>
            <View className='basis-1/2 h-[20%] shadow-md rounded-full bg-white'>
                <RoundTable/>
            </View>
            
      </View>
      <View className='h-[10%] w-fit p-[2%] rounded-full self-end bg-zinc-400 item-center justify-center'>
        <Text className='text-center text-white font-bold'>ENTRY</Text>
      </View>
      
    </View>
  )
}

const Chair = () => {
    const [pressed, setPressed] = useState(false);
  
    return (
      <TouchableOpacity
        onPress={() => setPressed((prev) => !prev)}
        className={`w-full  aspect-square rounded-full m-auto shadow-2xl shadow-white ${
          pressed ? "bg-gray-800" : "bg-gray-300"
        }`}
      />
    );
  };
  
const RoundTable=()=>{
    return (
        <View className='w-full h-full justify-around items-center'>
            <View className='w-[16%] self-center'><Chair/></View>
            <View className='w-[80%] h-[40%] self-center flex-row justify-around items-center'>
                <View className='w-[20%]'>

                <Chair/>
                </View>
                <Image source={require('../../assets/mug.png')} className='w-[30%] aspect-square justify-center'/>
                <View className='w-[20%]'>

                <Chair/>
                </View>
            </View>
            <View className='w-[16%] self-center'><Chair/></View>
            
        </View>
    )
}
