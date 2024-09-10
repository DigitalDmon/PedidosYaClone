import {ScrollView, Text, View} from 'react-native'
import {ArrowRightIcon} from '../icons'
import RestaurantCard from '../cards/RestaurantCard'
import {useEffect, useState} from 'react'
import client from '../../../sanity'

const imgLink = 'https://links.papareact.com/gn7'

const FeaturedRow = ({id, title, description}) => {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "featured" && _id == $id] {...,restaurants[] -> {...,dishes[] -> ,type -> {name}}}[0]`, {id})
      .then(data => {
        setRestaurants(data?.restaurants)
      })
  }, [])

  console.log(restaurants)

  return (
    /* SPECIAL CARDS */
    <View className="px-4">

      {/* HEADER CARDS */}
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="font-bold text-2xl">{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>

      {/* HORIZONTAL SCROLL CARDS */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        className="pt-4"
      >
        {/* RESTAURANTS FROM SANITY */}
        {restaurants?.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.genre}
            address={restaurant.address.slice(0,40) + " ..."}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            /*long={20}*/
            lat={restaurant.lat}
          />
        ))}

      </ScrollView>

    </View>
  )
}

export default FeaturedRow