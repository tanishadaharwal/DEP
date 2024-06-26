import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppProvider } from "./AppContext";
import "@expo/metro-runtime";
import LandingPage from "./src/screens/LandingPage";
import ProfilePage from "./src/screens/ProfilePage";
import QueryForm from "./src/screens/QueryForm";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import LostAndFound from "./src/screens/LostFound";
import LibraryPage from "./src/screens/LibraryPage";
import ReadingRoom from "./src/screens/ReadingRoom";
import StudyRoom from "./src/screens/StudyRoom";
import CommonRoom2 from "./src/screens/CommonRoom2";
import Lb1 from "./src/screens/Lb1";
import CommonRoom1 from "./src/screens/CommonRoom1";
import DiscussionRoom from "./src/screens/DiscussionRoom";
import HomePage from "./src/screens/HomePage";
import ElectronicLab from "./src/screens/ElectronicLab";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from "react";

import notification from './src/screens/notification';
import Userpage from './src/screens/userpage';
import bookManagementPage from './src/screens/bookManagementPage';
import ViewProfilePage from './src/screens/ViewProfilePage';
import NotificationDetailScreen from './src/screens/NotificationDetailScreen';
import AdminProfile from "./src/screens/AdminProfile";

import PermissionPage from "./src/screens/PermissionPage";
import UserProvider from "./AppContext";

//Importing all screens


export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    console.log("logged in  ? : ", data);
    if (data === null){
      data = false;
    }
    setisLoggedIn(data);
  }

  useEffect(() => {
    getData();
  }, []);


const LoginNav = () => {
  const AppStack = createNativeStackNavigator();
  return (
    <AppStack.Navigator
    
      screenOptions={{
        headerShown: false,
        
      }}

      
    >
      <AppStack.Screen name="register" component={Register} />
      <AppStack.Screen name="login" component={Login} />
      <AppStack.Screen name="homePage" component={HomePage} />
      <AppStack.Screen name="AdminProfile" component={AdminProfile} />
      <AppStack.Screen name="userpage" component={Userpage} />
      <AppStack.Screen name="notification" component={notification} />
      <AppStack.Screen name="NotificationDetailScreen" component={NotificationDetailScreen} />
      
      <AppStack.Screen name="ViewProfilePage" component={ViewProfilePage} />
      <AppStack.Screen name="bookManagementPage" component={bookManagementPage} />
      
      
     
      <AppStack.Screen name="landingPage" component={LandingPage} />
        
      {/* <AppStack.Screen name="permissionPage" component={PermissionPage} /> */}

      <AppStack.Screen name="studyRoom" component={StudyRoom} />
      <AppStack.Screen name="discussionRoom" component={DiscussionRoom} />
      <AppStack.Screen name="profilePage" component={ProfilePage} />
      <AppStack.Screen name="commonRoom1" component={CommonRoom1} />
      <AppStack.Screen name="lb1" component={Lb1} />
      <AppStack.Screen name="libraryPage" component={LibraryPage} />
      <AppStack.Screen name="queryForm" component={QueryForm} />
      <AppStack.Screen name="commonRoom2" component={CommonRoom2} />
      <AppStack.Screen name="readingRoom" component={ReadingRoom} />
      
      <AppStack.Screen name="electronicLab" component={ElectronicLab} />
      <AppStack.Screen name="lostFoundForm" component={LostAndFound} />
    </AppStack.Navigator>
  );
}
const AppNav = () => {
  const AppStack = createNativeStackNavigator();
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="AdminProfile" component={AdminProfile} />
      <AppStack.Screen name="userpage" component={Userpage} />
      <AppStack.Screen name="notification" component={notification} />
      <AppStack.Screen name="NotificationDetailScreen" component={NotificationDetailScreen} />
      
      <AppStack.Screen name="ViewProfilePage" component={ViewProfilePage} />
      <AppStack.Screen name="bookManagementPage" component={bookManagementPage} />
      
   
      
      <AppStack.Screen name="queryForm" component={QueryForm} />
      <AppStack.Screen name="lostFoundForm" component={LostAndFound} />
      {/* <AppStack.Screen name="permissionPage" component={PermissionPage} /> */}

      <AppStack.Screen name="homePage" component={HomePage} />

      <AppStack.Screen name="studyRoom" component={StudyRoom} />
      <AppStack.Screen name="discussionRoom" component={DiscussionRoom} />
      <AppStack.Screen name="profilePage" component={ProfilePage} />
      <AppStack.Screen name="commonRoom1" component={CommonRoom1} />
      <AppStack.Screen name="lb1" component={Lb1} />
      <AppStack.Screen name="libraryPage" component={LibraryPage} />
      
      <AppStack.Screen name="commonRoom2" component={CommonRoom2} />
      <AppStack.Screen name="readingRoom" component={ReadingRoom} />
      
      <AppStack.Screen name="electronicLab" component={ElectronicLab} />
      <AppStack.Screen name="landingPage" component={LandingPage} />
      <AppStack.Screen name="register" component={Register} />
      <AppStack.Screen name="login" component={Login} />  
    </AppStack.Navigator>
  );
}
  return (
    <UserProvider>

    <NavigationContainer>
      {isLoggedIn ? <AppNav/> : <LoginNav/>}
      </NavigationContainer>
    </UserProvider>
  );
}

     

  
