import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './AppContext';

import LandingPage from "./src/screens/LandingPage";
import ProfilePage from "./src/screens/ProfilePage";
//Importing all screens
export default function App() {

  const Stack = createNativeStackNavigator();
  return (
  
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="profilePage" component={ProfilePage}></Stack.Screen>
            <Stack.Screen name="landingPage" component={LandingPage}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
 
    
  );
}

