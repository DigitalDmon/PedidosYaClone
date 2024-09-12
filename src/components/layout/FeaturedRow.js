import useFetchRestaurants from '../hooks/useFetchRestaurants'
import RestaurantCard from '../cards/RestaurantCard'
import {ScrollView, Text, View} from 'react-native'
import {ArrowRightIcon} from '../icons'

export default function FeaturedRow({id, title, description}) {

  const restaurants = useFetchRestaurants(id)

  return (
    <View>
      {/* HEADER CARDS */}
      <View className="mt-4 ml-3 flex-row items-center justify-between">
        <Text className="font-bold text-2xl">{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text className="ml-3 text-xs text-gray-500">{description}</Text>

      {/* HORIZONTAL SCROLL CARDS */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 12}}
        className="pt-4"
      >
        {restaurants?.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imageLogo={restaurant.image_logo}
            imagePresentation={restaurant.image_presentation}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
          />
        ))}
      </ScrollView>
    </View>
  );
}
