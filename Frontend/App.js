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
<<<<<<< HEAD
import LostAndFound from "./src/screens/LostFound";

=======
import LibraryPage from "./src/screens/LibraryPage";
import ReadingRoom from "./src/screens/ReadingRoom";
import Lb1 from "./src/screens/Lb1";
import CommonRoom1 from "./src/screens/CommonRoom1";
import DiscussionRoom from "./src/screens/DiscussionRoom";
import ElectronicLab from "./src/screens/ElectronicLab";
import StudyRoom from "./src/screens/StudyRoom";
import CommonRoom2 from "./src/screens/CommonRoom2";
>>>>>>> 5e432d8 (library pages added)

//Importing all screens
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
<<<<<<< HEAD
        <Stack.Screen name="lostFoundForm" component={LostAndFound} />
=======
        <Stack.Screen name="libraryPage" component={LibraryPage} />
        <Stack.Screen name="readingRoom" component={ReadingRoom} />
        <Stack.Screen name="lb1" component={Lb1} />
        <Stack.Screen name="commonRoom1" component={CommonRoom1} />
        <Stack.Screen name="discussionRoom" component={DiscussionRoom} />
        <Stack.Screen name="electronicLab" component={ElectronicLab} />
        <Stack.Screen name="studyRoom" component={StudyRoom} />
        <Stack.Screen name="commonRoom2" component={CommonRoom2} />

>>>>>>> 5e432d8 (library pages added)
        <Stack.Screen name="landingPage" component={LandingPage} />
        <Stack.Screen name="profilePage" component={ProfilePage} />
        <Stack.Screen name="queryForm" component={QueryForm} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
