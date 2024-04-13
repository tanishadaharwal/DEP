import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { IP_ADDRESS } from "@env";
//{seatId}
export const Chair = ({ seatId, handleClick }) => {
  // console.log("seatID",seatId)
  // const [pressed, setPressed] = useState(seatId.status);
  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    if (seatId) setPressed(seatId.status);
  }, [seatId]);
  const [userStatus, setUserStatus] = useState(false);
  const [currentSeat,setCurrentSeat]=useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        // Get the token from AsyncStorage
        const token = await AsyncStorage.getItem("token");
        console.log("tokennn : ", token);
        // Make the API request to get user data using the token
        const response = await axios.get(
          `http://${IP_ADDRESS}:3000/client/get-user-data/${token}`
        );
        const { seatStatus, seatOccupied,roomOccupied } = response.data;
        setUserStatus(seatStatus);
        if(seatStatus){
          if(seatOccupied===seatId.seatNumber&&roomOccupied==seatId.room){
            setCurrentSeat(true)
          }
        }
        console.log(seatStatus);
        console.log(response);
        // Log the response
        console.log("User Data:", response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call the getUserData function when the component mounts
    getUserData();
  }, []);

  const handlePress = async () => {
    if (userStatus) {
      alert(`Please unoccupy your previous seat - ${roomOccupied}-${seatOccupied}`);
      return;
    }
    try {
      // Get the token from AsyncStorage
      const token = await AsyncStorage.getItem("token");
      console.log("tokennn : ", token);
      // Make the API request to get user data using the token
      const response = await axios.post(
        `http://${IP_ADDRESS}:3000/client/setUserSeatStatus/${token}/${seatId.room}/${seatId.seatNumber}`
      );
      setUserStatus((prev) => !prev);
      setCurrentSeat(true)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    setPressed((prev) => !prev);
    console.log("seatID", seatId.seatNumber);
    handleClick(seatId);
    // setUserStatus(true)
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`w-full  aspect-square rounded-full m-auto shadow-2xl shadow-white ${
        pressed ? (currentSeat ? "bg-green-400" : "bg-gray-800") : "bg-gray-300"
      }`}
    />
  );
};
