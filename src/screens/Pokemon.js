import {useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import { getPokemonDetailsApi } from '../api/pokemon'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'

export default function Pokemon(props) {
  const { navigation, route } = props

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    (async () => {
      try{
        const response = await getPokemonDetailsApi(route.params.id)
        setPokemon(response)
      }
      catch(error){
        console.log('errror')
        navigation.goBack()
      }
    })()
  }, [route.params])
  if(!pokemon) return null
  console.log(pokemon.stats)
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}/>
      <Type type={pokemon.types}/>
      <Stats stats={pokemon.stats}/>
    </ScrollView>
  )
}