import { useEffect, useState,useRef } from "react";
import { TouchableOpacity ,View,Button,Text, Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { IP_ADDRESS } from "@env";
import { requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';
import { Linking } from 'react-native';
//{seatId}
export const Chair = ({ seatId, handleClick }) => {
  console.log(seatId);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [previousLocation, setPreviousLocation] = useState(null);
  const [timer,setTimer]=useState(false);
  const intervalId = useRef(null);
  // const [timeoutId, setTimeoutId] = useState(null);
  // 30.96647709895278, 76.46971107594679
  // 30.966465106290446, 76.470032756808
  const area = {
    minLatitude: 30.96647709895278,
    maxLatitude: 30.9668024,
    minLongitude:76.46971107594679,
    maxLongitude:  76.470032756808,
  };

  let c=0;
  const calculateDistance = (coords1, coords2) => {
    const earthRadius = 6371000; // Earth's radius in meters
    const lat1 = toRadians(coords1.latitude);
    const lon1 = toRadians(coords1.longitude);
    const lat2 = toRadians(coords2.latitude);
    const lon2 = toRadians(coords2.longitude);
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    
    c = 2 * Math.atan(Math.sqrt(a)/ Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
};

const toRadians = (degrees) => {
  return degrees * Math.PI / 180;
};

 
const startLocationTracking = async () => {
      try {
        const { status } = await requestForegroundPermissionsAsync();
        console.log(status)
        

        if (status !== 'granted') {
          // If permission is not granted, show an alert and ask the user to retry
          Alert.alert(
            'Location Request',
            'Please allow location access to continue.',
            [
              {
                text: 'Go to Settings',
                onPress: async () => {
                  setErrorMsg(null);
                  
                  Linking.openSettings();// Retry the location permission request
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
          newLocation => {
            // Handle new location data here
            console.log("newLocation",newLocation)
            setLocation(newLocation);
            const isInArea = newLocation.coords.latitude >= area.minLatitude &&
                         newLocation.coords.latitude <= area.maxLatitude &&
                         newLocation.coords.longitude >= area.minLongitude &&
                         newLocation.coords.longitude <= area.maxLongitude;

            // Check for location change and display alert if needed
            if (!isInArea) {
              if (!intervalId.current) {
                let minutesOutOfArea = 0;
                intervalId.current = setInterval(() => {
                  minutesOutOfArea++;
                  if (minutesOutOfArea === 1) {
                    Alert.alert('Location Change Detected', `You moved out of the area for more than 1 minute.`);
                  } else if (minutesOutOfArea === 2) {
                    Alert.alert('Location Change Detected', `You moved out of the area for more than 2 minutes.`);
                    handlePress();
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
          error => {
            setErrorMsg(error.message);
          }
        );
        return () =>  {
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
  useEffect(() => {
    if (seatId) setPressed(seatId.status);
  }, [seatId]);
  const [userStatus, setUserStatus] = useState(false);
  const [currentSeat,setCurrentSeat]=useState(false);
  const [seatOccupied,setSeatOccupied]=useState(0);
  const [roomOccupied,setRoomOccupied]=useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        // Get the token from AsyncStorage
        const token = await AsyncStorage.getItem("token");
        
        const response = await axios.get(
          `http://${IP_ADDRESS}:3000/client/get-user-data/${token}`
        );
        const { seatStatus, seatOccupied,roomOccupied } = response.data;
       
        setSeatOccupied(seatOccupied)
        setRoomOccupied(roomOccupied)
        setUserStatus(seatStatus);
        if(seatStatus){
          
          if(seatOccupied===seatId.seatNumber&&roomOccupied==seatId.room){
            setCurrentSeat(true)
          }
        }

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call the getUserData function when the component mounts
    getUserData();
  }, []);

  

  const handlePress = async () => {
    if(!seatId) return
    if (userStatus&&seatId&&!(seatOccupied==seatId.seatNumber&&roomOccupied==seatId.room)) {

      alert(`Please unoccupy your previous seat ${roomOccupied}-${seatOccupied}`);
      return;
    }
    else{
      if(!userStatus){
        startLocationTracking();
      }
      try {
        // Get the token from AsyncStorage
        const token = await AsyncStorage.getItem("token");
        
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
      
      handleClick(seatId);
    }
    
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`w-full  aspect-square rounded-full m-auto shadow-2xl shadow-white ${
        pressed ? (currentSeat ? "bg-green-400" : "bg-gray-800") : "bg-gray-300"
      }`}
    ><Text className='m-auto text-white'>{seatId&&seatId.seatNumber}</Text></TouchableOpacity>
  );
};
