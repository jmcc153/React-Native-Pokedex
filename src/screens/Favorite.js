import { useCallback, useState } from 'react'
import { Text } from 'react-native'
import useAuth from '../hooks/useAuth'
import { getPokemonsFavoriteApi } from '../api/favorite'
import { getPokemonDetailsApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'
import { useFocusEffect } from '@react-navigation/native'
const Favorite = () => {

  const [pokemonsFav, setPokemonsFav] = useState([])
  const { user } = useAuth()

  console.log(pokemonsFav)

  useFocusEffect(
    useCallback(() => {
    if(user) {

      (async () => {
        setPokemonsFav([])
        const response = await getPokemonsFavoriteApi()
        response.map(async (pokemon) => {
          const details = await getPokemonDetailsApi(pokemon)
          setPokemonsFav(prevState => [...prevState, {id: details.id, name: details.name, type: details.types[0].type.name, order: details.order, image: details.sprites.other['official-artwork'].front_default}])
        })
      }
      )()
    }
  }, [user])
  )
  return (
    !user ? <Text>Usuario no logeado</Text> : <PokemonList pokemon={pokemonsFav} />
  )
}

export default Favorite