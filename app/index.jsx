import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>inde2x</Text>
      <Link href={"/(auth)/signup"}><Text>Goto login page</Text></Link>
     
     
    </View>
  )
}

export default index