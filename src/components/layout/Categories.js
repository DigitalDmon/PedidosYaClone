import {ScrollView} from 'react-native'
import CategoryCard from '../cards/CategoryCard'
import {useEffect, useState} from 'react'
import client, {urlFor} from '../../../sanity'

export default function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "category"]`)
      .then((data) => {
        setCategories(data)
      })
  }, [])

  return (
    <ScrollView
      contentContainerStyle={{paddingRight: 12}}
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