import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import Reel from '../../components/reels/Reel'

const explore = () => {
  return (
   
      <SafeAreaView className=" h-full relative w-full bg-primary ">
        <View className="flex flex-row w-full rounded-md overflow-hidden items-center">
          <TextInput placeholder='Search for video topic'   placeholderTextColor={"#7B7B8B"} className="h-[50px] w-[90%] text-white bg-[#1E1E2D] px-2"/>
            <View  className="absolute right-0 bottom-0 bg-[#1E1E2D] justify-center w-[10%] h-full ">
              <FontAwesome  size={28} name="search" color={"white"}  />
            </View> 
          
        </View>
        <ScrollView className="flex z-20 h-full w-full  bg-purple-600 flex-1 mt-4">
          <View className="flex flex-row flex-wrap">
            {[1,2,45,4,65,6,611].map((value)=>(<Reel key={value}/>))}
          </View>
          
        </ScrollView>
      
        
      </SafeAreaView>
      

     

    
  )
}

export default explore