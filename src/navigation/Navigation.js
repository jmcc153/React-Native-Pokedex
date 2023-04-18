import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image, View } from 'react-native'
import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation'
import AccountNavigation from './AccountNavigation'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="FavoriteScreen" component={FavoriteNavigation} options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size }) => (
          <Icon name="star"
          size={size}
          color={color}/>
        ),
        //headerTitle: 'Favoritos' Es para cambiar el titulo en la parte superior de la pantalla, no es necesario hacer un stack navigation en la version 6 de react Native
      }} />
      <Tab.Screen name="PokedexScreen" component={PokedexNavigation} options={{
        tabBarLabel: "",
        tabBarIcon: ({ color, size }) => (
          renderPokeball()
        )
      }} />
      <Tab.Screen name="AccountScreen" component={AccountNavigation} options={{
        tabBarLabel: 'Mi Cuenta',
        tabBarIcon: ({ color, size }) => (
          <Icon name="user"
          size={size}
          color={color}/>
        )
      }} />
    </Tab.Navigator>
  )
}

const renderPokeball = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={require('../assets/pokeball.png')} style={{width: 75, height: 75, top:-15}} />
    </View>
  )
}