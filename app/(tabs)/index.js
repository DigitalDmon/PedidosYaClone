import {Pressable, ScrollView, Text, TextInput, View} from 'react-native'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import {BellsIcon, DownIcon, SearchIcon, ShoppingCartIcon, UpIcon} from '../../src/components/icons'
import {useEffect, useState} from 'react'
import Categories from '../../src/components/layout/Categories'
import FeaturedRow from '../../src/components/layout/FeaturedRow'
import client from '../../sanity'

/* THIS IS A NAVIGATION WITH LINKING ROUTES */
const HomePage = () => {

  const [isDown, setIsDown] = useState(true)
  const [featuredCategories, setFeaturedCategories] = useState([])

  const handlePress = () => {
    setIsDown(!isDown)
  }

  useEffect(() => {
    client.fetch(`*[_type == "featured"] {..., restaurants[] -> {..., dishes[] ->}}`)
      .then((data) => {
        //console.log(data) // Verifica si los datos están llegando correctamente
        setFeaturedCategories(data)
      })
      .catch(console.error)
  }, [])


  return (
    <SafeAreaProvider style={{paddingBottom: 80}}>
      <SafeAreaView>

        {/* HEADER */}
        <View className="flex-row justify-between px-4">

          {/* LOCATION SECTION */}
          <Pressable onPress={handlePress} className="flex-row items-center">
            <Text className="text-base">Current Location</Text>
            {isDown ? <DownIcon /> : <UpIcon />}
          </Pressable>

          {/* SHOPPING CART AND NOTIFICATION SECTION */}
          <View className="flex-row">
            <View className="mr-3">
              <ShoppingCartIcon />
            </View>
            <View className="ml-3">
              <BellsIcon />
            </View>
          </View>
        </View>

        {/* SEARCH INPUT */}
        <View className="px-6 pt-4 flex-row justify-center items-center">

          {/* SEARCH ICON */}
          <SearchIcon />

          {/* INPUT TEXT */}
          <TextInput
            className="h-10 w-full p-4 ml-1 text-sm border rounded-2xl"
            placeholder="Restaurants, products, dishes"
            placeholderTextColor="#F52F41"
            keyboardType="default"
          >
          </TextInput>
        </View>

        {/* BODY  */}
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* CATEGORIES */}
          <View>
            <Categories />
          </View>

          {/* FEATURED ROWS */}
          <View className="pb-2">
            {/*  FEATURED CATEGORIES FROM SANITY*/}
            {featuredCategories?.map((category) => (
              <FeaturedRow
                /* PROPS */
                key={category._id}
                id={category._id}
                title={category.name}
                description={category.short_description}
              />
            ))}
          </View>

        </ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default HomePage