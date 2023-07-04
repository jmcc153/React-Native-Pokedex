import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import useAuth from '../../hooks/useAuth'

export default function UserData() {
  const {user, logout} = useAuth()
  console.log(user)
  return (
    <View style={styles.container}>
      <View style={styles.containerName}>
        <Text style={styles.welcomText}> Bienvenido!</Text>
        <Text style={styles.welcomText}>{user.firstName} {user.lastName}</Text>
      </View>
      <View>
        <ItemMenu text="Email" title={user.email}/>
        <ItemMenu text="Total Favoritos" title={`${user.favoritePokemons.length} Pokemons`}/>
      </View>
      <Button title="Cerrar sesión" onPress={() => logout()}/>
    </View>
  )
}

function ItemMenu({text, title}) {
  return (
    <View style={styles.containerInformation}>
      <Text style={styles.text}>{text}:</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingBottom: 40,
  },
  containerName:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    padding: 20,
  },
  containerInformation:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#CFD8DC',
  },
  text:{
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingRight: 20,
    width: 200,
  },
  welcomText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})
