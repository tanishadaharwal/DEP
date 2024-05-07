import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Chair } from "../component/Chair";

export default function CommonRoom1() {
  const navigation = useNavigation();
  const roomName = "CR - GroundFloor";
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
    <View className="w-screen h-screen bg-zinc-50">
      <View className="w-full bg-black h-[10%] items-center p-5 flex-row ">
        <TouchableOpacity onPress={() => navigation.navigate("libraryPage")}>
          <Image
            source={require("../../assets/booksLogo.png")}
            className="w-10 h-10 m-3"
          />
        </TouchableOpacity>
        <Text className="  text-white font-extrabold bg-black text-2xl ">
          COMMON ROOM
        </Text>
      </View>

      <View className="w-screen h-[90%] justify-center items-center">
        <View className="w-[40%] h-[40%] justify-between items-center object-cover">
          <Image
            source={require("../../assets/sofa.png")}
            className="w-[100%] h-[50%] "
          />
          <View className="w-[80%] flex-row justify-around">
            <View className="w-[25%]">
              <Chair seatId={seats[0]} handleClick={handleClick}/>
            </View>
            <View className="w-[25%]">
              <Chair seatId={seats[1]} handleClick={handleClick}/>
            </View>
            <View className="w-[25%]">
              <Chair seatId={seats[2]} handleClick={handleClick}/>
            </View>
          </View>
          <View className="w-screen h-[100%] flex-row rotate-180 justify-center items-center">
            <View className="w-[40%] h-[100%]">
              <Image
                source={require("../../assets/sofa.png")}
                className="w-[100%] h-[50%] "
              />
              <View className="w-[80%] flex-row justify-around">
                <View className="w-[25%]">
                  <Chair seatId={seats[3]} handleClick={handleClick}/>
                </View>
                <View className="w-[25%]">
                  <Chair seatId={seats[4]} handleClick={handleClick}/>
                </View>
                <View className="w-[25%]">
                  <Chair seatId={seats[5]} handleClick={handleClick}/>
                </View>
              </View>
            </View>
            <View className="w-[40%] h-[100%]">
              <Image
                source={require("../../assets/sofa.png")}
                className="w-[100%] h-[50%] "
              />
              <View className="w-[80%] flex-row justify-around">
                <View className="w-[25%]">
                  <Chair seatId={seats[6]} handleClick={handleClick}/>
                </View>
                <View className="w-[25%]">
                  <Chair seatId={seats[7]} handleClick={handleClick}/>
                </View>
                <View className="w-[25%]">
                  <Chair seatId={seats[8]} handleClick={handleClick}/>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}


// const Chair = () => {
//   const [pressed, setPressed] = useState(false);

//   return (
//     <TouchableOpacity
//       onPress={() => setPressed((prev) => !prev)}
//       className={`w-full  aspect-square rounded-full m-auto shadow-2xl shadow-white ${
//         pressed ? "bg-gray-800" : "bg-gray-300"
//       }`}
//     />
//   );
// };

