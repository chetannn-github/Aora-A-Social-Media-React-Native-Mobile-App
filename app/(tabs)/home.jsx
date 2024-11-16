import { View, Text, SafeAreaView, ScrollView, TextInput, RefreshControl } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const home = () => {
  let posts =[];
  return (
    <SafeAreaView className="  bg-[#161622] w-full mb-[100px] items-center" >
   
    

    <ScrollView 
    refreshControl={<RefreshControl/>} className="flex mb-5 max-h-fit w-full">
      {!posts &&<Text className="text-black">Loading.....</Text>}
     {posts.length>0&&posts.map((post,index)=>(<Post key={index} title={post.title} thumbnail={post.thumbnail} owner={post.creator.username} ownerImg = {post.creator.avatar} videoURL={post.videoURL}/>))}
    </ScrollView> 

    
  </SafeAreaView>
  )
}

export default home