import React, { useEffect, useState } from 'react';
import { Text, View, Alert,Button } from 'react-native';
import { requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';
import { Linking } from 'react-native';


const PermissionPage = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [previousLocation, setPreviousLocation] = useState(null);
  
  const [timeoutId, setTimeoutId] = useState(null);
  // 30.96647709895278, 76.46971107594679
  // 30.966465106290446, 76.470032756808
  const area = {
    minLatitude: 30.96647709895278,
    maxLatitude: 30.9668024,
    minLongitude:76.46971107594679,
    maxLongitude:  76.470032756808,
  };

  const thresholdDistance = 10;
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

  useEffect(() => {
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
              if (!timeoutId) {
                setTimeoutId(setTimeout(() => {
                  Alert.alert('Location Change Detected', `You moved out of the area for more than 20 seconds.`);
                  setTimeoutId(null); // Reset the timer
                }, 5000));
              }
            } else {
              // If the user is in the area, clear the timer
              if (timeoutId) {
                clearTimeout(timeoutId);
                setTimeoutId(null);
              }
            }
          
            setPreviousLocation(newLocation);
          },
          error => {
            setErrorMsg(error.message);
          }
        );
  
        // Cleanup function to unsubscribe when component unmounts
        return () =>  {
          subscriber.remove();
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        };
      
      } catch (error) {
        setErrorMsg(error.message);
      }
    };

    
  

    // Call startLocationTracking immediately
    startLocationTracking();
  
    // Call startLocationTracking every 10 seconds
    // const intervalId = setInterval(startLocationTracking, 10000);
  
    // Cleanup function to clear interval when component unmounts
    // return () => clearInterval(intervalId);
  }, []);
  


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : location ? (
        <Text>Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default PermissionPage;

