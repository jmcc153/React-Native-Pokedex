import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Pokedex from '../screens/Pokedex'
import Pokemon from '../screens/Pokemon'

const stack = createNativeStackNavigator()

export default function PokedexNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen name="Pokedex" component={Pokedex} options={{title: '', headerTransparent: true}} />
      <stack.Screen name="Pokemon" component={Pokemon} options={{title: '', headerTransparent: true}} />
    </stack.Navigator>
  )
}