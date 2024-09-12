import {ScrollView, Text, View} from 'react-native'
import {ArrowRightIcon} from '../icons'
import RestaurantCard from '../cards/RestaurantCard'
import {useEffect, useState} from 'react'
import client from '../../../sanity'

const imgLink = 'https://links.papareact.com/gn7'

export default function FeaturedRow({id, title, description}) {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "featured" && _id == $id] {...,restaurants[] -> {...,dishes[] -> ,type -> {name}}}[0]`, {id})
      .then(data => {
        setRestaurants(data?.restaurants)
      })
  }, [])

  //console.log(restaurants)

  return (
    /* SPECIAL CARDS */
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
        {/* RESTAURANTS FROM SANITY */}
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
            /*short_description={restaurant.short_description}*/
            /*dishes={restaurant.dishes}*/
            /*long={20}*/
            /*lat={restaurant.lat}*/
          />
        ))}

      </ScrollView>

    </View>
  )
}