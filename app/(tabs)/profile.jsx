import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserProfileHeader from '../../components/Post/UserProfileHeader';
import { Ionicons } from '@expo/vector-icons';
import AllPosts from '../../components/Post/AllPosts';

const Tab = createMaterialTopTabNavigator();

export default function profile() {
  return (
    <SafeAreaView className="h-[100vh] w-[100vw] bg-primary">
      <UserProfileHeader />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#161622' , height:'auto'}, // Background color
          tabBarIndicatorStyle: { backgroundColor: '#FF8c00', height: 3 }, 
          tabBarShowLabel: false,
          tabBarLabelStyle: { fontSize: 14, fontWeight: '600', color: 'white' }, // Tab label styles
        }}
      >
        <Tab.Screen 
          name="Home"
          component={AllPosts}
          options={{
            tabBarIcon: ({ color ,focused}) => (
              <Ionicons name={focused? "happy" : "happy-outline"} size={20}  color={focused ? '#FF8c00' : '#FFFFFF'}/>
            ),
            animationEnabled :true,

          }}
        />
        <Tab.Screen
          name="Profile"
          component={AllPosts}
          options={{
            tabBarIcon: ({ color , focused}) => (
              <Ionicons name={focused? "film" : "film-outline"} size={20} color={focused ? '#FF8c00' : '#FFFFFF'} />
            ),
          }}
        />
        <Tab.Screen
          name="Liked"
          component={AllPosts}
          options={{
            tabBarIcon: ({ color , focused }) => (
              <Ionicons name={focused? 'heart' : 'heart-outline'} size={20} color={focused ? '#FF8c00' : '#FFFFFF'} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}




const HomeScreen = () => {
  return (
    <ScrollView>
     <View className="bg-secondary h-[200vh] w-[100vw]">

     </View>
    </ScrollView>
  )
}
const ProfileScreen = () => {
  return (
    <View>
      <Text>profile</Text>
    </View>
  )
}
const LikedScreen = () => {
  return (
    <View>
      <Text>profile</Text>
    </View>
  )
}