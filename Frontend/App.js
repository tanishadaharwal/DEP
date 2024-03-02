import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './AppContext';
import "@expo/metro-runtime";
import LandingPage from "./src/screens/LandingPage";
import ProfilePage from "./src/screens/ProfilePage";
import Login from "./src/screens/Login"
import Register from "./src/screens/Register";
import HomePage from "./src/screens/HomePage";
import LibraryPage from "./src/screens/LibraryPage";
import ReadingRoom from "./src/screens/ReadingRoom";
//Importing all screens
export default function App() {

  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
         <Stack.Screen name="register" component={Register}></Stack.Screen> 
        <Stack.Screen name="login" component={Login}></Stack.Screen>
        
        <Stack.Screen name="homePage" component={HomePage}></Stack.Screen>
        <Stack.Screen name="libraryPage" component={LibraryPage}></Stack.Screen>
        <Stack.Screen name="readingRoom" component={ReadingRoom}></Stack.Screen>

        <Stack.Screen name="landingPage" component={LandingPage}></Stack.Screen>



      </Stack.Navigator>
    </NavigationContainer>


  );
}

