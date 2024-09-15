import {useRestaurants} from '../src/components/hooks/useRestaurants'
import {Stack, useLocalSearchParams} from 'expo-router'
import {Screen} from '../src/components/screens/Screens'
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native'
import {urlFor} from '../sanity.js'
import {LocationIcon, StarIcon} from '../src/components/icons'
import DishCard from '../src/components/cards/DishCard'

export default function RestaurantDetail() {

  const {id} = useLocalSearchParams() // Parámetro de búsqueda local (título o nombre)
  const {restaurants, loading, error} = useRestaurants(id) // Hook que trae la data filtrada por nombre

  if (loading) {
    return (
      <Screen>
        <ActivityIndicator size="large" color="#F52F41" />
      </Screen>
    )
  }

  if (error) {
    return (
      <Screen>
        <Text>Error: {error}</Text>
      </Screen>
    )
  }

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerLeft: () => {
          },
          headerRight: () => (
            <Image
              source={{uri: urlFor(restaurants[0].image_logo).url()}}
              className="h-10 w-10 rounded-full"
            />
          ),
          headerTitle: restaurants ? restaurants[0].name : 'Loading...'
        }}
      />
      {/* Renderiza detalles del restaurante */}
      <View>
        {restaurants.length === 0 ? (
          <Text>No restaurant info available</Text>
        ) : (
          <FlatList
            key={restaurants._id}
            data={restaurants}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => (
              <View>

                <Image
                  source={{uri: urlFor(item.image_presentation).url()}}
                  className="h-40"
                />
                <View className="p-3">
                  <View className="flex-row items-center">
                    <Text className="text-lg font-bold pr-2">{item.name}</Text>
                  </View>
                  <View className="flex-row items-center space-x-1 pt-2">
                    <StarIcon />
                    <Text className="text-base text-gray-500">
                      <Text className="text-black">{item.rating}</Text> · {item.type.name}</Text>
                  </View>
                  <View className="flex-row items-center space-x-1 pt-2">
                    <LocationIcon />
                    <Text className="text-base text-black">Nearby · {item.address}</Text>
                  </View>
                  <View>
                    <Text className="text-base pt-2">{item.short_description}</Text>
                  </View>
                </View>

                {/* Renderiza los platos */}
                {restaurants[0].dishes && restaurants[0].dishes.length > 0 ? (
                  restaurants[0].dishes.map((dish) => (
                    <DishCard
                      key={dish._id}
                      name={dish.name}
                      short_description={dish.short_description}
                      price={dish.price}
                      image={dish.image}
                    />
                  ))
                ) : (
                  <Text>No dishes available</Text>
                )}

              </View>
            )}
          />
        )}
      </View>
    </Screen>
  )
}
