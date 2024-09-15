import {ScrollView, TextInput, View} from 'react-native'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import {SearchIcon} from '../../src/components/icons'
import {Screen} from '../../src/components/screens/Screens'
import {useEffect, useState} from 'react'
import Categories from '../../src/components/layout/Categories'
import FeaturedRow from '../../src/components/layout/FeaturedRow'
import client from '../../sanity'

/* THIS IS A NAVIGATION WITH LINKING ROUTES */
const HomePage = () => {

  const [featuredCategories, setFeaturedCategories] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "featured"] {..., restaurants[] -> {..., dishes[] ->}}`)
      .then((data) => {
        //console.log(data) // Verifica si los datos están llegando correctamente
        setFeaturedCategories(data)
      })
      .catch(console.error)
  }, [])


  return (
    <Screen>
      <SafeAreaProvider>
        <SafeAreaView>


          {/* BODY  */}
          <ScrollView
            showsVerticalScrollIndicator={false}
          >

            {/* SEARCH INPUT */}
            <View className="bg-red-100 m-3 rounded-full">

              <View className="ml-3 flex-row items-center">
                {/* SEARCH ICON */}
                <SearchIcon />

                {/* INPUT TEXT */}
                <TextInput
                  className="h-10 w-full ml-1 text-lg"
                  placeholder="Restaurants, products, dishes"
                  placeholderTextColor="#000000"
                  keyboardType="default"
                >
                </TextInput>
              </View>

            </View>

            {/* CATEGORIES */}
            <View>
              <Categories />
            </View>

            {/* FEATURED ROWS */}
            <View>
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
    </Screen>
  )
}

export default HomePage