
import React from 'react'
import {  Tabs } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'


const _layout = () => {
  return (
    
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#FFA001' ,
      tabBarStyle:{
        position:"absolute",
        backgroundColor:"#161622",
        borderTopWidth: 1,
        borderTopColor: "#232533",
        height: 50,
        borderRadius:16,
        alignContent:'center',
        justifyContent:'center'
      }}}
    >
    <Tabs.Screen
      name="home"
      options={{
        title:"Home",
        headerShown:false,
        tabBarIcon: ({ color, focused }) => <Ionicons size={26} name={focused? "home" : "home-outline"} color={color} />,
      }}
    />
    <Tabs.Screen
      name="explore"
      options={{
        headerShown:false,
        title:"Explore",
        tabBarIcon: ({ color ,focused }) =>  <Ionicons size={26} name={focused? "compass" : "compass-outline"} color={color} />,
      }}
    />
    <Tabs.Screen
      name="reels"
      options={{
        headerShown:false,
        title: 'Reels',
        tabBarIcon: ({ color ,focused}) => <Ionicons size={26} name={focused? "film" : "film-outline"} color={color} />,
      }}
    /> 
    <Tabs.Screen
      name="create"
      options={{
        headerShown:false,
        title: 'Create',
        tabBarIcon: ({ color ,focused}) => <FontAwesome size={26} name={focused? "plus-circle" : "plus-circle"} color={color} />,
      }}
    /> 
    <Tabs.Screen
      name="profile"
      options={{
        headerShown:false,
        title: 'Profile',
        tabBarIcon: ({ color }) => <FontAwesome size={26} name="user" color={color} />,
      }}
    />
    </Tabs>
  )
}

export default _layout