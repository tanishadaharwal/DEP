
// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   PermissionsAndroid,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import Geolocation from "react-native-geolocation-service";

// const PermissionPage = () => {
//   const [hasLocationPermission, setHasLocationPermission] = useState(false);

//   useEffect(() => {
//     checkLocationPermission();
//   }, []);

//   const checkLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: "Cool Photo App Camera Permission",
//           message:
//             "Cool Photo App needs access to your camera " +
//             "so you can take awesome pictures.",
//           buttonNeutral: "Ask Me Later",
//           buttonNegative: "Cancel",
//           buttonPositive: "OK",
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("Location permission granted");
//         setHasLocationPermission(true);
//       } else {
//         console.log("Location permission denied");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const requestLocation = () => {
//     console.log(Geolocation)
//     console.log(Geolocation.getCurrentPosition)

//     if (hasLocationPermission) {
//       Geolocation.getCurrentPosition(
//         (position) => {
//          console.log(Geolocation)
//           console.log(position.coords);
//         },
//         // Geolocation.watchPosition(
//         //   (position) => {
//         //    console.log(Geolocation)
//         //     // console.log(position.coords);
//         //   },
//         (error) => {
//           // See error code charts below.
//           console.log(error.code, error.message);
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       );
//     } else {
//       console.log("Location permission not granted");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.item}>Try permissions</Text>
//       <Button title="Request Permissions" onPress={checkLocationPermission} />
//       <Button title="Request Location" onPress={requestLocation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: "#ecf0f1",
//     padding: 8,
//   },
//   item: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// export default PermissionPage;

//-------------------------------------

// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

// const App = () => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         const { status } = await requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//           setErrorMsg('Permission to access location was denied');
//           return;
//         }

//         const location = await getCurrentPositionAsync({});
//         setLocation(location);
//       } catch (error) {
//         setErrorMsg(error.message);
//       }
//     })();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {errorMsg ? <Text>{errorMsg}</Text> : location ? (
//         <Text>Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}</Text>
//       ) : (
//         <Text>Loading...</Text>
//       )}
//     </View>
//   );
// };

// export default App;



//---------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';

// const App = () => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     const watchId = Geolocation.watchPosition(
//       (newLocation) => {
//         setLocation(newLocation);
//       },
//       (error) => {
//         setErrorMsg(error.message);
//       },
//       {
//         enableHighAccuracy: true,
//         distanceFilter: 10, // Minimum distance (in meters) to trigger an update
//         interval: 1000, // Minimum time interval (in milliseconds) between updates
//         fastestInterval: 1000, // Maximum time interval (in milliseconds) between updates
//       }
//     );

//     return () => {
//       // Cleanup function to stop watching for location updates when component unmounts
//       Geolocation.clearWatch(watchId);
//     };
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {errorMsg ? <Text>{errorMsg}</Text> : location ? (
//         <Text>Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}</Text>
//       ) : (
//         <Text>Loading...</Text>
//       )}
//     </View>
//   );
// };

// export default App;

//---------

// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

// const App = () => {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         const { status } = await requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//           setErrorMsg('Permission to access location was denied');
//           return;
//         }

//         const subscriber = await watchPositionAsync({
// //           accuracy: Accuracy.High,
//           timeInterval: 1000, // Update every 1 second
//         }, newLocation => {
//           setLocation(newLocation);
//         });

//         // Cleanup function to unsubscribe when component unmounts
//         return () => subscriber.remove();
//       } catch (error) {
//         setErrorMsg(error.message);
//       }
//     })();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {errorMsg ? <Text>{errorMsg}</Text> : location ? (
//         <Text>Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}</Text>
//       ) : (
//         <Text>Loading...</Text>
//       )}
//     </View>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [previousLocation, setPreviousLocation] = useState(null);


  useEffect(() => {
    const startLocationTracking = async () => {
      try {
        console.log("hi")
        const { status } = await requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        const subscriber = await watchPositionAsync(
          {
            accuracy: 6, // High accuracy for best precision
            timeInterval: 10000, // Update every 10 seconds
          },
          newLocation => {
            setLocation(newLocation);

            if (previousLocation) {
              const distance = calculateDistance(previousLocation.coords, newLocation.coords);
              console.log("distance",distance)
              if (distance >= 0.3) {
                Alert.alert('Location Change Detected', `You moved ${distance.toFixed(2)} meters.`);
              }
            }

            setPreviousLocation(newLocation);
          },
          error => {
            setErrorMsg(error.message);
          }
        );

        // Cleanup function to unsubscribe when component unmounts
        return () => subscriber.remove();
      } catch (error) {
        setErrorMsg(error.message);
      }
    };

    // Call startLocationTracking immediately and then every 10 seconds
    startLocationTracking();
    const intervalId = setInterval(startLocationTracking, 10000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  
  

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

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
};

const toRadians = (degrees) => {
    return degrees * Math.PI / 180;
};

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {errorMsg ? <Text>{errorMsg}</Text> : location ? (
        <Text>Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default App;

