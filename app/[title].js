import useFetchRestaurants from '../src/components/hooks/useFetchRestaurants'
import {Stack, useLocalSearchParams} from 'expo-router'
import {Screen} from '../src/components/screens/Screens'

export default function RestaurantDetail() {

  const {title} = useLocalSearchParams()
  const restaurantInfo = useFetchRestaurants(title)  // o algún ID relevante

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerLeft: () => {
          },
          headerRight: () => {
          },
          headerTitle: title
        }}
      />
      {/* Renderiza detalles del restaurante */}
    </Screen>
  )
}