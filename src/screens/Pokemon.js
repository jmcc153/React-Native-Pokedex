import {useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import { getPokemonDetailsApi } from '../api/pokemon'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'
import { addPokemonFavoriteApi, deletePokemonFavoriteApi, getPokemonsFavoriteApi, isFavoriteApi } from '../api/favorite'

export default function Pokemon(props) {
  const { navigation, route } = props
  const [pokemon, setPokemon] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [reloadFavorite, setReloadFavorite] = useState(false)

  useEffect(() => {
    (async () => {
      try{
        const response = await getPokemonDetailsApi(route.params.id)
        const responseFav = await isFavoriteApi(route.params.id)
        setIsFavorite(responseFav)
        setPokemon(response)
      }
      catch(error){
        console.log('errror')
        navigation.goBack()
      }
    })()
  }, [route.params, reloadFavorite])

  const handleFavorite = async (id) => {
    if(isFavorite){
      deletePokemonFavoriteApi(id)
      console.log(await getPokemonsFavoriteApi())
    }
    else{
      await addPokemonFavoriteApi(id)
      console.log(await getPokemonsFavoriteApi())
    }
    setReloadFavorite(!reloadFavorite)
  }
  if(!pokemon) return null
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
        handleFavorite={() => handleFavorite(route.params.id)}
        isFavorite={isFavorite}/>
      <Type type={pokemon.types}/>
      <Stats stats={pokemon.stats}/>
    </ScrollView>
  )
}