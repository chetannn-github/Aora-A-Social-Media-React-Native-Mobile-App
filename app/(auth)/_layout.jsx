import { Slot } from 'expo-router'
import ExpoStatusBar from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const _layout = () => {
  return ( 
  <SafeAreaView className="h-full bg-red-500 w-fit">
    <ExpoStatusBar backgroundColor="#ff9c01" style="dark" translucent={false} />
    <Slot/>
  </SafeAreaView>
  )
}

export default _layout