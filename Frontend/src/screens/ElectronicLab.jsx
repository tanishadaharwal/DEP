import { View, Text,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'


export default function ElectronicLab() {

    const navigation=useNavigation()

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
                 <RoundTable/>
            </View>
            <View className='w-[100%] basis-1/3 bg-white border border-gray-300 shadow-sm shadow-black justify-center'>
                 <RoundTable/>
            </View>
            <View className='w-[100%] basis-1/3 bg-white border border-gray-300 shadow-sm shadow-black justify-center'>
                 <RoundTable/>
            </View>
       
        </View>

        <View className='basis-2/3 h-[100%] justify-center bg-white shadow-lg border border-gray-300 shadow-gray-800'>
            <View className='w-[110%] h-[60%] justify-center items-center rotate-45'>
                <View className='w-[1.5%] shadow-md  border shadow-black absolute mx-auto h-[50%] bg-gray-800 rotate-45 z-10'></View>
                <RoundTable/>
                <View className='w-[1.5%] absolute  border shadow-md  shadow-blue-900 mx-auto h-[50%] bg-gray-800 -rotate-45 z-10'></View>
            </View>
            <View className='w-[110%] h-[60%]  justify-center items-center rotate-45'>
            <View className='w-[1.5%] shadow-md  border shadow-black absolute mx-auto h-[50%] bg-gray-800 rotate-45 z-10'></View>

                <RoundTable/>
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
        <View className='w-full h-[50%] justify-around items-center z-0'>
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
