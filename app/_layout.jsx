import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css"
import { Stack } from "expo-router";
import { Provider } from 'react-redux';
import {appStore} from "../redux/appStore"


const _layout = () => {




  
  return (
    <Provider store={appStore}>

    
    <SafeAreaView className=" h-full bg-red-400">
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}} ></Stack.Screen>
        <Stack.Screen name="(auth)"options={{headerShown:false}}></Stack.Screen>
       
        
      </Stack>
    </SafeAreaView>
    </Provider>
  )
}

export default _layout