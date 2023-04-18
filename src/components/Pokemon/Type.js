import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import getColorByPokemon from '../../utils/getColorByPokemon'

export default function Type({type}) {
  const bgStyles = (item) =>{ return {backgroundColor: getColorByPokemon(item.type.name), ...styles.bgText}}
  return (
    <View>
        <View style={styles.textContainer}>{type.map((item) => {
          return <Text style={bgStyles(item)}>{item.type.name}</Text>
        })}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  bgText:{
    borderRadius: 10,
    paddingHorizontal: 10,
  }
});