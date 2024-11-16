import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css"
import { router, SplashScreen, Stack } from "expo-router";
import { Provider } from 'react-redux';
import {appStore} from "../redux/appStore"
import { useEffect } from "react";
import { useFonts } from 'expo-font'

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }




  
  return (
    <Provider store={appStore}>
      <SafeAreaView className=" h-full bg-red-400">
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}} ></Stack.Screen>
        <Stack.Screen name="(auth)" options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="(tabs)" options={{headerShown:false}}></Stack.Screen>
      </Stack>
    </SafeAreaView>
    </Provider>
  )
}

export default _layout