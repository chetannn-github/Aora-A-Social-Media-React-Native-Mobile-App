import { View, Text ,Image, Pressable} from 'react-native'
import React from 'react'
import PostImage from "../../assets/images/thumbnail.png"
import Profile from "../../assets/images/profile.png"

import logoutImage from "../../assets/icons/logout.png"


const UserProfileHeader = ({totalPosts =24}) => {
    
    let handleLogout = ()=>{
        
       
     }


  return (
    <View className="flex items-center h-[fit] py-2 px-5 ">
        <Pressable onPress={handleLogout} className="self-end"><Image className="h-[20px] w-[20px] " source={logoutImage}></Image></Pressable>

        <View className="w-[106px] h-[106px] border-[1.5px] border-secondary rounded-md overflow-hidden ">
            <Image resizeMode='cover' source={Profile}  className="h-full w-full " ></Image>
            
        </View>
        <Text className="text-white text-[18px]">Demo</Text>
        <View className="w-[106px]  flex flex-col items-center  mt-3 ">
            <Text className="text-2xl text-white">{totalPosts}</Text>
            <Text className="text-[#cdcde0]">Posts</Text>
        </View>
    </View>
  )
}

export default UserProfileHeader