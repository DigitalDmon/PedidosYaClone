import {useEffect, useState} from 'react'
import client from '../../../sanity'

export default function useFetchRestaurants(id) {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    if (id) {
      client.fetch(
        `*[_type == "featured" && _id == $id] {..., restaurants[] -> {..., dishes[] -> , type -> {name}}}[0]`,
        {id}
      ).then((data) => {
        setRestaurants(data?.restaurants)
      })
    }
  }, [])

  return restaurants

};
