import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { IP_ADDRESS } from "@env";
import { getSeatsByRoom, updateSeatStatus } from "../api/seatAPI";
import { Chair } from "../component/Chair";

export default function Lb1() {
  const navigation = useNavigation();
  const roomName = "LB1";
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const seatsData = await getSeatsByRoom(roomName);
        console.log(seatsData);
        setSeats(seatsData);
      } catch (error) {
        console.error("Error fetching seats:", error.message);
      }
    };
    fetchSeats();
  }, []);

  const handleClick = async (seatId) => {
    try {
      const updatedSeats = await updateSeatStatus(roomName, seatId.seatNumber);
      const sortedSeats = updatedSeats.sort(
        (a, b) => a.seatNumber - b.seatNumber
      );
      setSeats(sortedSeats);
    } catch (error) {
      console.error("Error updating seat status:", error.message);
    }
  };

  return (
    <SafeAreaView className="h-full">
      <View className="w-screen h-screen bg-zinc-100">
        <View className="w-full bg-blue-900 h-[11.5%] items-center p-5 flex-row pt-11">
          <TouchableOpacity onPress={() => navigation.navigate("homePage")}>
            <Image
              source={require("../../assets/booksLogo.png")}
              className="w-10 h-10 m-3"
            />
          </TouchableOpacity>
          <Text className="  text-white font-extrabold text-2xl ">LB 1</Text>
        </View>

        <View className="w-[90%] self-center h-[15%] flex-row border-b-2 p-2 border-gray-400 shadow-sm shadow-black bg-white">
          <Comp seatId={[seats[0]]} handleClick={handleClick}/>
          <Comp seatId={[seats[1]]} handleClick={handleClick}/>
          <Comp seatId={[seats[2]]} handleClick={handleClick}/>
          <Comp seatId={[seats[3]]} handleClick={handleClick}/>
        </View>

        <View className="w-[full] h-[70%] flex-row justify-around items-center mt-[5%]">
          <View className="w-[20%] h-full justify-around ">
            <View className="w-[90%] h-[20%] justify-center items-center rounded-lg bg-white shadow-2xl shadow-black">
              <View className="h-[20%]">
                <View className="h-[100%] aspect-square m-auto">
                  <Chair seatId={seats[4]} handleClick={handleClick}/>
                </View>
                {/* <Chair /> */}
              </View>
              <Image
                source={require("../../assets/table.png")}
                className="w-[90%] h-[50%] object-contain"
              />
              <View className="h-[20%]">
                <View className="h-[100%] aspect-square m-auto">
                  <Chair seatId={seats[5]} handleClick={handleClick}/>
                </View>
                {/* <Chair /> */}
              </View>
            </View>
            <Sofa seatId={[seats[6],seats[7],seats[8]]} handleClick={handleClick}/>
            <Sofa seatId={[seats[9],seats[10],seats[11]]} handleClick={handleClick}/>
            <View className="w-full h-[20%]  justify-center items-center rounded-full bg-zinc-300">
              <Text className="rotate-90 font-extrabold">ENTRY</Text>
            </View>
          </View>

          <View className="h-[100%] w-[40%] justify-around items-center ">
            <View className="w-[90%] h-[30%] justify-center items-center bg-zinc-200">
              <Image
                source={require("../../assets/book-shelf.png")}
                className="w-full h-[80%]"
              />
              <Text className="font-bold">BOOKSHELF</Text>
            </View>
            <View className="w-[90%] h-[70%] flex-wrap justify-around items-center ">
              <View className="h-[30%] w-[50%] bg-white shadow-sm shadow-white">
                <Table seatId={[seats[12],seats[13],seats[14],seats[15]]} handleClick={handleClick}/>
              </View>
              <View className="h-[30%] w-[50%]">
                <Table seatId={[seats[16],seats[17],seats[18],seats[19]]} handleClick={handleClick}/>
              </View>
              <View className="h-[30%] w-[50%]">
                <Table seatId={[seats[20],seats[21],seats[22],seats[23]]} handleClick={handleClick}/>
              </View>
              <View className="h-[30%] w-[50%]">
                <Table seatId={[seats[24],seats[25],seats[26],seats[27]]} handleClick={handleClick}/>
              </View>
              <View className="h-[30%] w-[50%]">
                <Table seatId={[seats[28],seats[29],seats[30],seats[31]]} handleClick={handleClick}/>
              </View>
              <View className="h-[30%] w-[50%]">
                <Table seatId={[seats[32],seats[33],seats[34],seats[35]]} handleClick={handleClick}/>
              </View>
            </View>
          </View>

          <View className="w-[25%] h-[100%] justify-around items-center ">
            <View className="w-[90%] h-[20%]">
              <Table seatId={[seats[36],seats[37],seats[38],seats[39]]} handleClick={handleClick}/>
            </View>
            <View className="w-[90%] h-[20%]">
              <Table seatId={[seats[40],seats[41],seats[42],seats[43]]} handleClick={handleClick}/>
            </View>
            <View className="w-[90%] h-[20%]">
              <Table seatId={[seats[44],seats[45],seats[46],seats[47]]} handleClick={handleClick}/>
            </View>
            <View className="w-[90%] h-[20%]">
              <Table seatId={[seats[48],seats[49],seats[50],seats[51]]} handleClick={handleClick}/>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Comp = ({seatId,handleClick}) => {
  return (
    <View className="h-full w-[20%] m-[2%] justify-around items-center">
      <Image
        source={require("../../assets/desktop.png")}
        className=" w-[80%] h-[50%]"
      />
      <View className="h-[30%] justify-center ">
        <View className="h-full aspect-square m-auto">
          <Chair seatId={seatId[0]} handleClick={handleClick}/>
        </View>
        {/* <Chair /> */}
      </View>
    </View>
  );
};

const Sofa = ({seatId,handleClick}) => {
  return (
    <View className="h-[15%] w-[110%] flex-col justify-around  -rotate-90 bg-white rounded-xl p-1 shadow-2xl shadow-black">
      {/* <View className='w-[90%] h-[60%] object-cover m-20 bg-red-800'>  */}

      <Image
        source={require("../../assets/sofa.png")}
        className="w-[100%] h-[70%] "
      />
      {/* </View> */}
      <View className="h-[20%] flex-row justify-center">
        <View className="h-[100%] aspect-square m-auto">
          <Chair seatId={seatId[0]} handleClick={handleClick}/>
        </View>
        <View className="h-[100%] aspect-square m-auto">
          <Chair seatId={seatId[1]} handleClick={handleClick}/>
        </View>
        <View className="h-[100%] aspect-square m-auto">
          <Chair seatId={seatId[2]} handleClick={handleClick}/>
        </View>
      </View>
    </View>
  );
};

const Table = ({seatId,handleClick}) => {
  return (
    <View className="h-[100%] w-[90%] justify-center items-around shadow-md rounded-sm shadow-black bg-white">
      <View className="flex-row h-[20%]">
        <View className="h-[95%] aspect-square m-auto">
          <Chair seatId={seatId[0]} handleClick={handleClick}/>
        </View>
        <View className="h-[95%] aspect-square m-auto">
          <Chair seatId={seatId[1]} handleClick={handleClick}/>
        </View>
      </View>
      <Image
        source={require("../../assets/table.png")}
        className="w-[90%] h-[40%] self-center"
      />
      <View className="flex-row h-[20%]">
        <View className="h-[95%] aspect-square m-auto">
          <Chair seatId={seatId[2]} handleClick={handleClick}/>
        </View>
        <View className="h-[95%] aspect-square m-auto">
          <Chair seatId={seatId[3]} handleClick={handleClick}/>
        </View>
      </View>
    </View>
  );
};

// const Chair = () => {
//   const [pressed, setPressed] = useState(false);

//   return (
//     <TouchableOpacity
//       onPress={() => setPressed((prev) => !prev)}
//       className={`w-full aspect-square rounded-full m-auto shadow-2xl shadow-white ${
//         pressed ? "bg-gray-800" : "bg-gray-200"
//       }`}
//     />
//   );
// };
