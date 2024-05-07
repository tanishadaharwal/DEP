import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Svg, {
  Path,
  Text as SvgText,
  TextPath,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import { Chair } from "../component/Chair";
import {getSeatsByRoom,updateSeatStatus} from "../api/seatAPI";


export default function StudyRoom() {
  
  const navigation = useNavigation();
  const roomName = "StudyRoom";
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
    <View className="w-screen h-screen bg-zinc-100">
      <View className="w-full bg-black h-[10%] items-center p-5 flex-row ">
        <TouchableOpacity onPress={() => navigation.navigate("homePage")}>
          <Image
            source={require("../../assets/booksLogo.png")}
            className="w-10 h-10 m-3"
          />
        </TouchableOpacity>
        <Text className="  text-white font-extrabold bg-black text-2xl ">
          STUDY ROOM
        </Text>
      </View>

      <View className="w-[100%] h-[90%] items-center flex-row">
        {/* first view */}

        <View className="w-[80%] h-[100%] justify-around items-center">
          {/* back seat */}
          <View className="flex-row h-[20%] w-[100%] justify-around items-center ">
            {/* first table */}
            <View className="w-[40%] h-[100%] border rounded-full p-2 bg-white border-gray-300 shadow-sm">
              <View className="flex-row w-[70%] self-center justify-between items-center h-[25%]">
                <View className="w-[30%]">
                  <Chair seatId={seats[0]} handleClick={handleClick}/>
                </View>
                <View className="w-[30%]">
                  <Chair seatId={seats[1]} handleClick={handleClick}/>
                </View>
              </View>

              <Image
                source={require("../../assets/mug.png")}
                className="h-[50%] aspect-square self-center"
              />

              <View className="flex-row w-[70%] self-center justify-between items-center h-[25%]">
                <View className="w-[30%]">
                  <Chair seatId={seats[2]} handleClick={handleClick}/>
                </View>
                <View className="w-[30%]">
                  <Chair seatId={seats[3]} handleClick={handleClick}/>
                </View>
              </View>
            </View>

            <View className="w-[40%] h-[100%] rounded-full border bg-white p-2 border-gray-300 shadow-sm">
              <View className="flex-row w-[70%] self-center justify-between items-center h-[25%]">
                <View className="w-[30%]">
                  <Chair seatId={seats[4]} handleClick={handleClick}/>
                </View>
                <View className="w-[30%]">
                  <Chair seatId={seats[5]} handleClick={handleClick}/>
                </View>
              </View>

              <Image
                source={require("../../assets/mug.png")}
                className="h-[50%] aspect-square self-center"
              />

              <View className="flex-row w-[70%] self-center justify-between items-center h-[25%]">
                <View className="w-[30%]">
                  <Chair seatId={seats[6]} handleClick={handleClick}/>
                </View>
                <View className="w-[30%]">
                  <Chair seatId={seats[7]} handleClick={handleClick}/>
                </View>
              </View>
            </View>
          </View>

          {/* bookshelf */}
          <View className="w-[100%] h-[30%] bg-zinc-200 pt-10 rounded-full justify-center items-center">
            <Image
              source={require("../../assets/book-shelf.png")}
              className="w-[50%] h-[50%] self-center"
            />

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              className="w-[100%] h-[100%] -translate-y-16"
            >
              <Svg height="300" width="300">
                <Defs>
                  <LinearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <Stop offset="0%" stopColor="#00416A" />
                    <Stop offset="50%" stopColor="#007791"/>
                    <Stop offset="100%" stopColor="#005A9C" />
                  </LinearGradient>
                </Defs>
                <Path
                  id="circlePath"
                  d="
            M 10, 100
            a 140,140 0 0,0 280,0
        "
                  fill="none"
                  stroke="none"
                  strokeWidth="1"
                />
                <SvgText
                  fontSize="44"
                  className="font-extrabold"
                  fill="url(#gradient)"
                >
                  <TextPath href="#circlePath" startOffset="15%">
                    B O O K S H E L F
                  </TextPath>
                </SvgText>
              </Svg>
            </View>
          </View>

          {/* cubicles */}
          <View className="w-[90%] h-[40%] flex-wrap justify-between">
            <View className="w-[50%] h-[50%]">
              <Cubicle seatId={[seats[8],seats[9],seats[10],seats[11]]} handleClick={handleClick}/>
            </View>
            <View className="w-[50%] h-[50%]">
              <Cubicle seatId={[seats[12],seats[13],seats[14],seats[15]]} handleClick={handleClick}/>
            </View>
            <View className="w-[50%] h-[50%]">
              <Cubicle seatId={[seats[16],seats[17],seats[18],seats[19]]} handleClick={handleClick}/>
            </View>
            <View className="w-[50%] h-[50%]">
              <Cubicle seatId={[seats[20],seats[21],seats[22],seats[23]]} handleClick={handleClick}/>
            </View>
          </View>
        </View>

        <View className="w-[20%] h-[100%] justify-between items-center">
          <View className="w-[100%] h-[30%] bg-white shadow-2xl shadow-black items-center justify-center rounded-2xl">
            <Text className="rotate-90 font-extrabold">STAFF DESK</Text>
          </View>

          <View className="w-[90%] h-[50%] justify-between items-center">
            <View className="h-[45%] bg-white shadow-2xl justify-around shadow-black rounded-md">
              <View className="flex-row w-[90%] justify-around items-center h-[25%]">
                <View className="w-[30%]">
                  <Chair seatId={seats[24]} handleClick={handleClick}/>
                </View>
                <View className="w-[30%]">
                  <Chair seatId={seats[25]} handleClick={handleClick}/>
                </View>
              </View>
              <View className="justify-center items-center h-[50%]">
                <View className="w-[90%] h-[40%] justify-center items-center border-b-4">
                  <Image
                    source={require("../../assets/table.png")}
                    className="w-[100%] h-[100%]"
                  />
                </View>
                <View className="w-[90%] h-[40%] justify-center items-center">
                  <Image
                    source={require("../../assets/table.png")}
                    className="w-[100%] h-[100%]"
                  />
                </View>
              </View>
              <View className="flex-row w-[90%] justify-around items-center h-[25%] ">
                <View className="w-[30%] ">
                  <Chair seatId={seats[26]} handleClick={handleClick}/>
                </View>
                <View className="w-[30%]">
                  <Chair seatId={seats[27]} handleClick={handleClick}/>
                </View>
              </View>
            </View>

            <View className="h-[45%] bg-white shadow-2xl justify-around shadow-black rounded-md py-2">
              <View className="flex-row w-[90%] justify-around items-center h-[25%]">
                <View className="w-[30%]">
                  <Chair seatId={seats[28]} handleClick={handleClick}/>
                </View>
                <View className="w-[30%]">
                  <Chair seatId={seats[29]} handleClick={handleClick}/>
                </View>
              </View>
              <View className="justify-center items-center h-[50%]">
                <View className="w-[90%] h-[40%] justify-center items-center border-b-4">
                  <Image
                    source={require("../../assets/table.png")}
                    className="w-[100%] h-[100%]"
                  />
                </View>
                <View className="w-[90%] h-[40%] justify-center items-center">
                  <Image
                    source={require("../../assets/table.png")}
                    className="w-[100%] h-[100%]"
                  />
                </View>
              </View>
              <View className="flex-row w-[90%] justify-around items-center h-[25%]">
                <View className="w-[30%]">
                  <Chair seatId={seats[30]} handleClick={handleClick}/>
                </View>
                <View className="w-[30%]">
                  <Chair seatId={seats[31]} handleClick={handleClick}/>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const Cubicle = ({seatId,handleClick}) => {
  return (
    <View className="w-[100%] h-[100%] flex-wrap">
      <View className="w-[50%] h-[50%] justify-start items-center rotate-90 border border-zinc-300 shadow-sm shadow-black">
        <Image
          source={require("../../assets/table.png")}
          className="w-[100%] h-[50%]"
        />
        <View className="w-[35%] m-1">
          <Chair seatId={seatId[0]} handleClick={handleClick}/>
        </View>
      </View>
      <View className="w-[50%] h-[50%] justify-start  items-center border border-zinc-300 shadow-sm shadow-black">
        <Image
          source={require("../../assets/table.png")}
          className="w-[100%] h-[50%]"
        />
        <View className="w-[35%] m-1">
          <Chair seatId={seatId[1]} handleClick={handleClick}/>
        </View>
      </View>
      <View className="w-[50%] h-[50%] justify-start rotate-180  items-center border-zinc-300 border shadow-sm shadow-black">
        <Image
          source={require("../../assets/table.png")}
          className="w-[100%] h-[50%]"
        />
        <View className="w-[35%] m-1">
          <Chair seatId={seatId[2]} handleClick={handleClick}/>
        </View>
      </View>
      <View className="w-[50%] h-[50%] justify-start -rotate-90 items-center border border-zinc-300 shadow-sm shadow-black">
        <Image
          source={require("../../assets/table.png")}
          className="w-[100%] h-[50%]"
        />
        <View className="w-[35%] m-1">
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
//       className={`w-full  aspect-square rounded-full m-auto shadow-2xl shadow-white ${
//         pressed ? "bg-gray-800" : "bg-gray-300"
//       }`}
//     />
//   );
// };
