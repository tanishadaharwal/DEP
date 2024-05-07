import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Chair } from "../component/Chair";
import {getSeatsByRoom,updateSeatStatus} from "../api/seatAPI";

export default function CommonRoom2() {
  const navigation = useNavigation();
  const roomName = "CR - FirstFloor";
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
        <View className="w-full bg-blue-900 h-[12.5%] items-center p-5 flex-row pt-11">
          <TouchableOpacity onPress={() => navigation.navigate("libraryPage")}>
            <Image
              source={require("../../assets/booksLogo.png")}
              className="w-10 h-10 m-3"
            />
          </TouchableOpacity>
          <Text className="  text-white font-extrabold text-2xl ">
            Common Room 2
          </Text>
        </View>

        {/* <View className='w-[90%] self-center h-[14%] flex-row border-b-2 p-2 border-gray-400 shadow-sm shadow-black bg-white'> */}
        <View className="w-[100%] h-[90%] justify-between flex-row">
          <View className=" w-[30%] h-full justify-between flex-col">
            <View className="flex-row h-[50%] w-full ">
              <View className="w-[55%] h-full ">
                <View className="w-[100%] h-[70%] m-auto bg-gray-300 rounded-3xl">
                  <Text className="-rotate-90 text-center m-auto font-bold text-lg">
                    TABLE
                  </Text>
                </View>
              </View>
              <View className="w-[30%] h-[80%] m-auto flex-col">
                <Chair seatId={seats[0]} handleClick={handleClick}/>
                <Chair seatId={seats[1]} handleClick={handleClick}/>
                <Chair seatId={seats[2]} handleClick={handleClick}/>
                <Chair seatId={seats[3]} handleClick={handleClick}/>
              </View>
            </View>
            <View className="flex-row h-[50%] w-full ">
              <View className="w-[55%] h-full ">
                <View className="w-[100%] h-[70%] m-auto bg-gray-300 rounded-3xl">
                  <Text className="-rotate-90 text-center m-auto font-bold text-lg">
                    TABLE
                  </Text>
                </View>
              </View>
              <View className="w-[30%] h-[80%] m-auto flex-col">
                <Chair seatId={seats[4]} handleClick={handleClick}/>
                <Chair seatId={seats[5]} handleClick={handleClick}/>
                <Chair seatId={seats[6]} handleClick={handleClick}/>
                <Chair seatId={seats[7]} handleClick={handleClick}/>
              </View>
            </View>
          </View>
          <View className=" w-[40%] h-full flex-col justify-around">
            <View className="w-[60%] h-[20%] m-auto">
              <Table seatId={[seats[8],seats[9],seats[10],seats[11]]} handleClick={handleClick}/>
            </View>
            <View className="w-[60%] h-[20%] m-auto ">
              <Table seatId={[seats[12],seats[13],seats[14],seats[15]]} handleClick={handleClick}/>
            </View>
            <View className="w-[60%] h-[20%] m-auto ">
              <Table seatId={[seats[16],seats[17],seats[18],seats[19]]} handleClick={handleClick}/>
            </View>
            <View className="w-[60%] h-[20%] m-auto ">
              <Table seatId={[seats[20],seats[21],seats[22],seats[23]]} handleClick={handleClick}/>
            </View>
          </View>
          <View className=" w-[30%] h-full flex-row">
            <View className="flex-col w-[40%]   justify-around">
              <View className="flex-col h-[25%] w-[70%] ">
                <Image
                  source={require("../../assets/roundTable.png")}
                  className="h-[25%] aspect-square m-auto"
                />
              </View>
              <View className="flex-col h-[25%] w-[70%] ">
                <Image
                  source={require("../../assets/roundTable.png")}
                  className="h-[25%] aspect-square m-auto"
                />
              </View>
              <View className="flex-col h-[25%] w-[70%] ">
                <Image
                  source={require("../../assets/roundTable.png")}
                  className="h-[25%] aspect-square m-auto"
                />
              </View>
            </View>
            <View className="flex-col w-[35%]  justify-around">
              <View className="flex-col h-[25%] w-[70%] m-auto">
                <Chair seatId={seats[24]} handleClick={handleClick}/>
                <Chair seatId={seats[25]} handleClick={handleClick}/>
                <Chair seatId={seats[26]} handleClick={handleClick}/>
              </View>
              <View className="flex-col h-[25%] w-[70%] m-auto">
                <Chair seatId={seats[27]} handleClick={handleClick}/>
                <Chair seatId={seats[28]} handleClick={handleClick}/>
                <Chair seatId={seats[29]} handleClick={handleClick}/>
              </View>
              <View className="flex-col h-[25%] w-[70%] m-auto">
                <Chair seatId={seats[30]} handleClick={handleClick}/>
                <Chair seatId={seats[31]} handleClick={handleClick}/>
                <Chair seatId={seats[32]} handleClick={handleClick}/>
              </View>
            </View>
            <View className="w-[25%] h-[70%] bg-gray-300 rounded-3xl m-auto self-center justify-center flex-col ">
              <Text className=" rotate-90 font-extrabold">S</Text>
              <Text className=" rotate-90 font-extrabold">O</Text>
              <Text className=" rotate-90 font-extrabold">F</Text>
              <Text className=" rotate-90 font-extrabold">A</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Table = ({seatId,handleClick}) => {
  return (
    <View className="h-[100%] w-[90%] justify-center items-around shadow-md rounded-md shadow-black bg-white ">
      <View className="flex-row h-[20%]">
        <View className="w-[40%] aspect-square m-auto">
          <Chair seatId={seatId[0]} handleClick={handleClick}/>
        </View>
        <View className="w-[40%] aspect-square m-auto">
          <Chair seatId={seatId[1]} handleClick={handleClick}/>
        </View>
      </View>
      <Image
        source={require("../../assets/table.png")}
        className="w-[90%] h-[40%] self-center"
      />
      <View className="flex-row h-[20%]">
        <View className="w-[40%] aspect-square m-auto">
          <Chair seatId={seatId[2]} handleClick={handleClick}/>
        </View>
        <View className="w-[40%] aspect-square m-auto">
          <Chair seatId={seatId[3]} handleClick={handleClick}/>
        </View>
      </View>
    </View>
  );
};
