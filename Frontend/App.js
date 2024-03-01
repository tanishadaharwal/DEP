import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './AppContext';
import "@expo/metro-runtime";
import LandingPage from "./src/screens/LandingPage";
import Register from './src/screens/Register';
import Login from './src/screens/Login';
//Importing all screens
export default function App() {

  const Stack = createNativeStackNavigator();
  return (
  
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="landingPage" component={LandingPage}></Stack.Screen>
            <Stack.Screen name="register" component={Register}></Stack.Screen>
            <Stack.Screen name="login" component={Login}></Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
 
    
  );
}

