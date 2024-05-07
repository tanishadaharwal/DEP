import { useEffect, useState, useRef } from "react";
import { TouchableOpacity, View, Button, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { IP_ADDRESS } from "@env";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { Linking } from "react-native";
import { useContext } from "react";
import { UserContext } from "../../AppContext";
//{seatId}
export const Chair = ({ seatId, handleClick }) => {
  // console.log(seatId);

  const userCtx = useContext(UserContext);
  // console.log("userhere", userCtx.currentUser);
  let user = userCtx.currentUser;
  const [currentSeat, setCurrentSeat] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [previousLocation, setPreviousLocation] = useState(null);
  const [timer, setTimer] = useState(false);
  // console.log("userCtt", userCtx);

  // console.log("user%%", user, seatId, user.seatStatus);
  if (
    user &&
    seatId &&
    user.seatStatus == true &&
    user.roomOccupied == seatId.room &&
    user.seatOccupied == seatId.seatNumber &&
    currentSeat == false
  ) {
    // console.log("trueee", user.seatStatus);
    setCurrentSeat(true);
  }

  // useEffect(() => {
  //   console.log("user%%",user,seatId,user.seatStatus)
  //   if (
  //     user &&
  //     seatId &&
  //     user.seatStatus == true &&
  //     user.roomOccupied == seatId.room &&
  //     user.seatOccupied == seatId.seatNumber
  //   ) {
  //     console.log("trueee",user.seatStatus);
  //     setCurrentSeat(true);

  //   }
  // }, []);

  useEffect(() => {
    if (seatId) setPressed(seatId.status);
  }, [seatId]);

  const intervalId = useRef(null);
  // const [timeoutId, setTimeoutId] = useState(null);
  // 30.96647709895278, 76.46971107594679
  // 30.966465106290446, 76.470032756808
  // 30.665110,76.827992
  const area = {
    minLatitude: 30.96647709895278,
    maxLatitude: 30.96647709895278,
    minLongitude: 76.46971107594679,
    maxLongitude: 76.46971107594679,
  };

  let c = 0;
  const calculateDistance = (coords1, coords2) => {
    const earthRadius = 6371000; // Earth's radius in meters
    const lat1 = toRadians(coords1.latitude);
    const lon1 = toRadians(coords1.longitude);
    const lat2 = toRadians(coords2.latitude);
    const lon2 = toRadians(coords2.longitude);
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    c = 2 * Math.atan(Math.sqrt(a) / Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
  };

  const toRadians = (degrees) => {
    return (degrees * Math.PI) / 180;
  };

  const handleSeatChange = async () => {
    try {
      // Get the token from AsyncStorage
      const token = await AsyncStorage.getItem("token");
      console.log("called");
      // Make the API request to get user data using the token
      const response = await axios.post(
        `http://${IP_ADDRESS}:3000/client/setUserSeatStatus/${token}/${seatId.room}/${seatId.seatNumber}`
      );
      userCtx.updateStatus(seatId);
      setCurrentSeat((prev) => !prev);
    } catch (error) {
      console.error("Error fetching user data in seat :", error);
    }
  };

  const startLocationTracking = async () => {
    // console.log("begin here");
    try {
      const { status } = await requestForegroundPermissionsAsync();
      // console.log(status);

      if (status !== "granted") {
        // If permission is not granted, show an alert and ask the user to retry
        Alert.alert(
          "Location Request",
          "Please allow location access to continue.",
          [
            {
              text: "Go to Settings",
              onPress: async () => {
                setErrorMsg(null);

                Linking.openSettings(); // Retry the location permission request
              },
            },
          ],
          { cancelable: false }
        );
        return;
      }

      // If permission is granted, start tracking the location
      const subscriber = await watchPositionAsync(
        {
          accuracy: 6,
          timeInterval: 5000,
        },
        (newLocation) => {
          // Handle new location data here
          // console.log("newLocation", newLocation);
          setLocation(newLocation);
          const isInArea =
            newLocation.coords.latitude >= area.minLatitude &&
            newLocation.coords.latitude <= area.maxLatitude &&
            newLocation.coords.longitude >= area.minLongitude &&
            newLocation.coords.longitude <= area.maxLongitude;

          // Check for location change and display alert if needed
          if (!isInArea) {
            if (!intervalId.current) {
              let minutesOutOfArea = 0;
              intervalId.current = setInterval(() => {
                minutesOutOfArea++;
                //5 minutes here
                console.log("minutes", minutesOutOfArea);
                console.log("okkkgatg", Date.now() - userCtx.timer);
                if (
                  Date.now() - userCtx.timer <= 3605 &&
                  minutesOutOfArea === 1
                ) {
                  Alert.alert(
                    "Your seat is currently unoccupied as you are no longer in the library ",
                    "call1"
                  );
                  setPressed((prev) => !prev);
                  handleSeatChange();
                  handleClick(seatId);
                } else if (Date.now() - userCtx.timer > 3605) {
                  // 15 minutes here
                  if (minutesOutOfArea === 1) {
                    Alert.alert(
                      `It has been noted that you are currently absent from the library premises`,
                      `Kindly return to your designated seat at your earliest convenience`
                    );
                  } else if (minutesOutOfArea === 2) {
                    Alert.alert(
                      "Your seat is currently unoccupied as you are no longer in the library ",
                      "call 2"
                    );
                    setPressed((prev) => !prev);
                    handleSeatChange();
                    handleClick(seatId);
                  }
                }
              }, 60000); // Set the interval to 1 minute
            }
          } else {
            // If the user is in the area, clear the interval
            if (intervalId.current) {
              clearInterval(intervalId.current);
              intervalId.current = null;
            }
          }

          setPreviousLocation(newLocation);
        },
        (error) => {
          setErrorMsg(error.message);
        }
      );
      return () => {
        subscriber.remove();
        if (intervalId.current) {
          clearInterval(intervalId.current);
        }
      };
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const [pressed, setPressed] = useState(false);

  const handlePress = async () => {
    // console.log("user",user);
    // user=userCtx.currentUser;
    // console.log("user",userCtx.currentUser,user);
    if (!seatId || !user) return;
    if (
      user.seatStatus &&
      !(
        user.seatOccupied == seatId.seatNumber &&
        user.roomOccupied == seatId.room
      )
    ) {
      alert(
        `Please unoccupy your previous seat ${user.roomOccupied}-${user.seatOccupied}`
      );
      return;
    } else {
      if (!user.seatStatus) {
        startLocationTracking();
      }
      await handleSeatChange();
      setPressed((prev) => !prev);

      handleClick(seatId);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`w-full  aspect-square rounded-full m-auto shadow-2xl shadow-white ${
        pressed ? (currentSeat ? "bg-green-400" : "bg-gray-800") : "bg-gray-300"
      }`}
    >
      <Text className="m-auto text-white">{seatId && seatId.seatNumber}</Text>
    </TouchableOpacity>
  );
};
