import { useEffect, useState} from 'react'
import { SafeAreaView, View, Text, StatusBar } from 'react-native'
import { getPokemonApi, getPokemonDetailsByUrl } from '../api/pokemon'
import PokemonList from '../components/PokemonList'

const Pokedex = () => {
  const [pokemonDetail , setPokemonDetail] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try{
      const response = await getPokemonApi(20, 0, nextUrl)
      setNextUrl(response.next)
      response.results.map(async (pokemon) => {
        const details = await getPokemonDetailsByUrl(pokemon.url)
        setPokemonDetail(prevState => [...prevState, {id: details.id, name: details.name, type: details.types[0].type.name, order: details.order, image: details.sprites.other['official-artwork'].front_default}])
      })
    }
    catch(error){
      throw error
    }
  }
  return (
    <SafeAreaView>
      <PokemonList pokemon={pokemonDetail.sort((a, b) => a.order - b.order)} loadPokemons={loadPokemons} isNext={nextUrl} />
    </SafeAreaView>
  )
}

export default Pokedex