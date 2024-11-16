import { View, Text, Image } from 'react-native'
import React from 'react'
import PostImage from "../../assets/images/thumbnail.png"
const Post = () => {
  return (
    <View className= "relative h-[120px] w-[33%] bg-yellow-600  my-3">
      <Image resizeMode='cover' source={PostImage}  className="h-full w-full " ></Image>
    </View>
  )
}

export default Post