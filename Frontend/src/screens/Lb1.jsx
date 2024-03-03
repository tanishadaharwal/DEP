import { View, Text,Image ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from "@react-navigation/native";

export default function Lb1() {
    const navigation = useNavigation();

  return (
   <View className='w-screen h-screen bg-zinc-100'>

        <View className='w-full bg-black h-[10%] items-center p-5 flex-row '>
        <TouchableOpacity onPress={() => navigation.navigate('libraryPage')}>
    <Image source={require('../../assets/booksLogo.png')} className='w-10 h-10 m-3' />
    </TouchableOpacity>
      <Text className='  text-white font-extrabold bg-black text-2xl '>LB 1</Text>
        </View>

        <View className='w-[90%] self-center h-[15%] flex-row border-b-2 p-2 border-gray-400 shadow-sm shadow-black bg-white'>
            <Comp/>
            <Comp/>
            <Comp/>
            <Comp/>
        </View>

        <View className='w-[full] h-[70%] flex-row justify-around items-center mt-[5%]'>
            <View className='w-[20%] h-full justify-around '>
                <View className='w-[90%] h-[20%] justify-center items-center rounded-lg bg-white shadow-2xl shadow-black'>
                    <View className='h-[20%]'>

                    <Chair/>
                    </View>
                    <Image source={require('../../assets/table.png')} className='w-[90%] h-[50%] object-contain'/>
                    <View className='h-[20%]'>
                    <Chair />

                    </View>
                </View>
               <Sofa/>
               <Sofa/>
               <View className='w-full h-[20%]  justify-center items-center rounded-full bg-zinc-300'>
                <Text className='rotate-90 font-extrabold'>ENTRY</Text>
               </View>
            </View>

            <View className='h-[100%] w-[40%] justify-around items-center '>
                <View className='w-[90%] h-[30%] justify-center items-center bg-zinc-200'>
                      <Image source={require('../../assets/book-shelf.png')} className='w-full h-[80%]'/>
                      <Text className='font-bold'>BOOKSHELF</Text>

                </View>
                <View className='w-[90%] h-[70%] flex-wrap justify-around items-center '>
                    
                    
                    <View className='h-[30%] w-[50%] bg-white shadow-sm shadow-white' >
                        <Table/>
                    </View>
                    <View className='h-[30%] w-[50%]'>
                         <Table/>
                    </View>
                    <View className='h-[30%] w-[50%]'>
                        <Table/>
                    </View>
                    <View className='h-[30%] w-[50%]'>
                        <Table/>
                    </View>
                    <View className='h-[30%] w-[50%]'>
                        <Table/>
                    </View>
                    <View className='h-[30%] w-[50%]'>
                        <Table/>
                    </View>
                    
                   
                </View>

            </View>

            <View className='w-[25%] h-[100%] justify-around items-center '>
                <View className='w-[90%] h-[20%]'>

                     <Table/>
                </View>
                <View className='w-[90%] h-[20%]'>

                <Table/>
                </View>
                <View className='w-[90%] h-[20%]'>

                <Table/>
                </View>
                <View className='w-[90%] h-[20%]'>

                <Table/>
                </View>
                

            </View>

        </View>

   </View>
  )
}

const Comp=()=>{
    return(
        <View className='h-full w-[20%] m-[2%] justify-around items-center'>
            <Image source={require('../../assets/desktop.png')} className=' w-[80%] h-[50%]' />
            <View className='h-[30%] justify-center '>

                  <Chair/>
            </View>
        </View>
    )
}

const Sofa=()=>{
    return(
        <View className='h-[15%] w-[110%] flex-col justify-around  -rotate-90 bg-white rounded-xl p-1 shadow-2xl shadow-black'>
            {/* <View className='w-[90%] h-[60%] object-cover m-20 bg-red-800'>  */}

                <Image source={require('../../assets/sofa.png')} className='w-[100%] h-[70%] ' />
            {/* </View> */}
            <View className='h-[20%] flex-row justify-center'>
               

                <Chair/>
               
                <Chair/>
                <Chair/>
            </View>
        </View>
    )
}

const Table=()=>{
    return(
        <View className='h-[100%] w-[90%] justify-center items-around shadow-md rounded-sm shadow-black bg-white'>
            <View className='flex-row h-[20%]'>
                <Chair/>
                <Chair/>

            </View>
            <Image source={require('../../assets/table.png')} className='w-[90%] h-[40%] self-center'/>
            <View className='flex-row h-[20%]'>
                <Chair/>
                <Chair/>

            </View>
        </View>
    )
}

const Chair=()=>{

    const [pressed,setPressed]=useState(false)
   
    return (
            <TouchableOpacity onPress={()=>setPressed((prev)=>!prev)}  className={`h-full aspect-square rounded-full m-auto shadow-2xl shadow-white ${pressed?'bg-gray-800':'bg-gray-200'}`} />
    )
}