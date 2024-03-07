import { View, Text,SafeAreaView,Button,Pressable,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from "@react-navigation/native";

export default function ReadingRoom() {

    const navigation = useNavigation();
    

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
            <Table n={4}/>
             </View> 
             <View className='w-[48%] h-full border-5 m-1 border-black '>
            <Table n={4}/>
             </View> 
        </View>
        <View className='flex-row w-full  h-[80%] '>
            <View className='w-[40%] flex-col h-full flex justify-center'>
                <Table n={2} h={1}/>
                <Table n={2} h={1}/>
                <Table n={2} h={1}/>
                <Table n={2} h={1}/>
            </View>
            
            <View className='w-[30%] h-[50%] bg-gray-800 justify-center self-center' >
                <Text className='-rotate-90 text-white font-bold text-lg'>BOOK SHELF</Text>
                
            </View>
          
            <View className='w-[40%] flex-col h-full flex justify-center'>
                    <Table n={2} h={1}/>
                    <Table n={2} h={1}/>
                    <Table n={2} h={1}/>
                    
            </View>
          
        </View>
      </View>

      <View className='w-[80%] self-end  h-[10%] bg-slate-400 flex-row rounded-md'>
                
                    <View className='w-[80%] justify-center'>

                   
                <View className='flex flex-row justify-around'>
                    <View className='w-[30%] flex-row '>
                        <Chair/>
                        <Chair/>
                        <Chair/>
                    </View>
                    <View className='w-[30%] flex-row'>
                        <Chair/>
                        <Chair/>
                        <Chair/>
                    </View>
                
                </View>
                
                <View className='w-[90%] h-[30%] m-[2%] bg-slate-300 opacity-50 rounded-xl shadow-2xl shadow-white'><Text className='font-extrabold text-white text-center text-md'>SOFA</Text></View>
                
                 </View>
                 <View className='bg-slate-200 w-[25%] h-[80%] rounded-full' ><Text className=' -rotate-90 text-gray-400 font-extrabold'>ENTRY</Text></View>
                
        </View>

    </SafeAreaView>
  )
}

const Table=({n,h})=>{
    const arrayToMap = Array.from({ length: n }, (_, index) => index);

    return(
        <View className={`w-full h-[25%] p-4 ${h===1?'h-[25%]':'h-[100%]'}`}>
            <View className='w-full h-full  justify-around m-auto' >
                <View className='w-full h-[30%] flex-row m-auto items-center justify-center'>
            {arrayToMap.map((item, index) => (
                    <Chair key={index}/>
                ))}
                </View>
                <View className='w-[50%] h-[25%] rounded-sm bg-gray-600 border-2 border-gray-700 m-auto' ></View>
                <View className='w-full h-[30%] flex-row m-auto justify-center'>
                {arrayToMap.map((item, index) => (
                    <Chair key={index}/>
                ))}
                </View>

            </View>
        </View>
    )
}

const Chair=()=>{

    const [pressed,setPressed]=useState(false)
   
    return (
            <TouchableOpacity onPress={()=>setPressed((prev)=>!prev)}  className={`w-[18%] aspect-square rounded-full  mx-[5%] shadow-2xl shadow-white ${pressed?'bg-gray-800':'bg-gray-200'}`} />
    )
}
