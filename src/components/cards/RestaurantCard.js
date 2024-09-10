import {Image, Text, TouchableOpacity, View} from "react-native";
import {LocationIcon, StarIcon} from "../icons";
import {urlFor} from '../../../sanity'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
    return (
        <TouchableOpacity className="min-w-100 bg-white mr-3 shadow rounded-t-lg">
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                className="h-36 w-64 rounded-t-lg"
            />
            <View className="p-4">
                <Text className="font-bold pb-2">{title}</Text>
                <View className="flex-row items-center space-x-1 pb-1" >
                    <StarIcon />
                    <Text className="text-sm text-gray-500">
                        <Text className="text-black">{rating}</Text> · {genre}</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <LocationIcon />
                    <Text className="text-sm text-black">Nearby · {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard;