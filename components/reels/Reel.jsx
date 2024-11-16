import { View, Text, Image } from 'react-native'
import React from 'react'
import ImageSource from "../../assets/preview/homepage.jpeg"
const Reel = () => {
  return (
    <View className="relative h-[300px] w-[49%] flex bg-yellow-300 mb-3 ">
      <Image className="relative h-full w-full" resizeMode='cover' source={ImageSource}></Image>
    </View>
  )
}

export default Reel 