import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "./Components/Sign In/SignIn";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReportForm from "./Components/ReportForm/ReportForm";
import Home from "./Components/Home/Home";
import Laporan from "./Components/Laporan/Laporan";
import Splash from "./Components/SplashScreen/Splash";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash Screen"
        component={Splash}
        options={{title:"Splash", headerShown:false}} />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "SignIn", headerShown:false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: "home", headerShown:false,}}
        />
        <Stack.Screen
          name="Laporan"
          component={Laporan}
          options={{title: "laporan"}}
        />
        <Stack.Screen
          name="ReportForm"
          component={ReportForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 