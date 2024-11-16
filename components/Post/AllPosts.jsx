import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import Post from './Post'

const AllPosts = () => {
  return (
        
       <ScrollView className=" w-[100vw] flex-1   bg-purple-600">
        <View className=" w-[100vw] flex-1 flex-row  flex-wrap justify-between bg-purple-600">
          {[1,2,3,4,5,6,7,2,3,1,3,1,3,2,3,4,2,2,1,1,1,1,1].map((value,index)=>(<Post key={index}/>))}
        </View>
      

   </ScrollView>
   
   
  )
}

export default AllPosts