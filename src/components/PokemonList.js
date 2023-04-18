import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'
export default function PokemonList({pokemon, loadPokemons, isNext }) {

  const loadMore = () => {
    loadPokemons()
  }

  return (

      <FlatList
        data={pokemon}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) =>String(index)}
        renderItem={({item}) => (
          <PokemonCard pokemons={item} />
        )}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext && (
          <ActivityIndicator size="large" style={styles.spinner} />
          )}
      />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 10,
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  spinner: {
    marginTop: 10,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  }
})
