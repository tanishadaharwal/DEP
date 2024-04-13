import Geolocation from "react-native-geolocation-service";
import { Text } from "react-native";
import React, { useEffect } from "react";

const GeoLocationPage = () => {
  console.log("ok")
  
  
  function componentDidMount() {
    // console.log("check", hasLocationPermission);
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }

  useEffect(() => {
    async function hasLocationPermission(){
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.LOCATION,
        {
          title: 'Cool Weather App',
          message: 'Cool Weather App needs access to use your location',
          buttonNegative: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the app');
      } else {
        console.log('Location Permission Denied');
      } (error) => {
        console.warn(error);
      }
    }
    hasLocationPermission();

    componentDidMount();
    console.log("ok")
  }, []);

  return <Text>geoLocation</Text>;
};

export default GeoLocationPage;
