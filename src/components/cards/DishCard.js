import {styled} from 'nativewind'
import {Image, Pressable, Text, View} from 'react-native'
import {urlFor} from '../../../sanity.js'

const StyledPressable = styled(Pressable)

export default function DishCard({
                                   name,
                                   short_description,
                                   price,
                                   image
                                 }) {
  return (
    <StyledPressable className="w-full bg-white shadow active:opacity-70 active:border-b-red-100">
      <Image
        source={{uri: urlFor(image).url()}}
        className="h-32"
      />
      <View className="p-3">
        <Text className="text-lg font-bold pr-2">{name}</Text>
        <Text className="text-base text-black">{short_description}Hola</Text>
        <Text>{price}</Text>
      </View>
    </StyledPressable>
  )
}