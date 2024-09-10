import {ScrollView} from 'react-native'
import CategoryCard from '../cards/CategoryCard'
import {useEffect, useState} from 'react'
import client, {urlFor} from '../../../sanity'
import id from '../../../app/(tabs)/profile/[id]'

const imgLink = 'https://links.papareact.com/gn7'

const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "category"]`)
      .then((data) => {
        setCategories(data)
      })
  }, [])

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 4,
        paddingTop: 10
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {/* CATEGORY CARDS */}
      {categories?.map((category) => (
        <CategoryCard key={category._id} imgUrl={urlFor(category.image).url()} title={category.name} />
      ))}
    </ScrollView>
  )
}

export default Categories