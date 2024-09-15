import {Stack} from 'expo-router'
import {Pressable, Text, View} from 'react-native'
import {BellsIcon, DownIcon, ShoppingCartIcon, UpIcon} from '../src/components/icons'
import {useState} from 'react'
import {Screen} from '../src/components/screens/Screens'

/* APP MAIN LAYOUT */
const RootLayout = () => {

  const [isDown, setIsDown] = useState(true)

  const handlePress = () => {
    setIsDown(!isDown)
  }

  return (
    /* STACK IS THE HEADER ON THE APP */
    <Screen>
      <Stack screenOptions={{
        headerTitle: '',
        headerLeft: () => (
          /* LOCATION SECTION */
          <Pressable onPress={handlePress} className="flex-row items-center">
            <Text className="text-base">Current Location</Text>
            {isDown ? <DownIcon /> : <UpIcon />}
          </Pressable>
        ),
        headerRight: () => (
          /* SHOPPING CART AND NOTIFICATION SECTION */
          <View className="flex-row">
            <View className="mr-3">
              <ShoppingCartIcon />
            </View>
            <View className="ml-3">
              <BellsIcon />
            </View>
          </View>
        )
      }}>
      </Stack>
    </Screen>
  )
}

export default RootLayout
