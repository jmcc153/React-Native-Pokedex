import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import getColorByPokemon from '../utils/getColorByPokemon'

export default function PokemonCard({pokemons}) {
  const navigation = useNavigation()

  const bgStyles = {backgroundColor: getColorByPokemon(pokemons.type), ...styles.bgStyles}

  const goToPokemon = () => {
    console.log(pokemons.id)
    navigation.navigate('Pokemon', {id: pokemons.id})
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemons.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{`${pokemons.name.charAt(0).toUpperCase() + pokemons.name.slice(1)} `}</Text>
            <Image source={{ uri: pokemons.image}} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card:{
    flex: 1,
    height: 130
  },
  spacing:{
    flex: 1,
    padding: 5
  },
  bgStyles:{
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
  number:{
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'white',
  },
  name:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  image:{
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90
  }
})