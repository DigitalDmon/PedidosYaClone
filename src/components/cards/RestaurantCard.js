import {Image, Text, TouchableOpacity, View} from 'react-native'
import {LocationIcon, StarIcon} from '../icons'
import {urlFor} from '../../../sanity.js'

export default function RestaurantCard({
                          id,
                          imageLogo,
                          imagePresentation,
                          title,
                          rating,
                          genre,
                          address,
                          short_description,
                          dishes,
                          longitude,
                          latitude
                                       }) {
  return (
    <TouchableOpacity className="w-80 bg-white mr-3 shadow rounded-t-lg">
      <Image
        source={{uri: urlFor(imagePresentation).url()}}
        className="h-40 rounded-t-lg"
      />
      <View className="p-3">
        <View className="flex-row items-center">
          <Text className="text-lg font-bold pr-2">{title}</Text>
          <Image
            source={{uri: urlFor(imageLogo).url()}}
            className="h-8 w-8 rounded-full"
          />
        </View>
        <View className="flex-row items-center space-x-1 pb-1">
          <StarIcon />
          <Text className="text-base text-gray-500">
            <Text className="text-black">{rating}</Text> · {genre}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationIcon />
          <Text className="text-base text-black">Nearby · {address.slice(0, 35) + '...'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}