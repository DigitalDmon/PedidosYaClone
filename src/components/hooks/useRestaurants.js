import {useEffect, useState} from 'react'
import client from '../../../sanity'

export const useRestaurants = (id) => {

  const query = `*[_type == "restaurant" && _id == $id]{
  _id,
  name,
  short_description,
  image_presentation,
  image_logo,
  address,
  rating,
  type->{
    name
  },
  dishes[]->{
    _id,
    name,
    short_description,
    price,
    image
  }
}
`

  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true // Control para evitar actualizaciones si el componente se desmonta

    // Definir y ejecutar la función fetchData dentro del mismo useEffect
    const fetchData = () => {
      client.fetch(query, {id})
        .then((data) => {
          if (isMounted) {
            setRestaurants(data)
            setLoading(false)
          }
        })
        .catch((err) => {
          if (isMounted) {
            setError(err.message)
            setLoading(false)
          }
        })
    }

    fetchData()

    // Cleanup function para evitar memory leaks si el componente se desmonta
    return () => {
      isMounted = false
    }
  }, [id])

  return {restaurants, loading, error}
}
