import {StyleSheet, View, SafeAreaView, Text, Image } from 'react-native'
import getColorByPokemon from '../../utils/getColorByPokemon'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import useAuth from '../../hooks/useAuth'
import { useEffect } from 'react'


export default function Header({name,order,image,type, handleFavorite,isFavorite}) {
  const color = getColorByPokemon(type)
  const bgStyle = {backgroundColor: color, ...styles.bgStyle}
  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{`#${`${order}`.padStart(3, 0)} ${name.charAt(0).toUpperCase() + name.slice(1)}`}</Text>
          <Icon solid={isFavorite} name="heart" size={30} onPress={() => handleFavorite()} color="#FFF" />
        </View>
        <View style={styles.contentImg}>
          <Image source={{uri:image}} style={styles.image} onPress={handleFavorite} />
        </View>
      </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({
  bgStyle:{
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{scaleX: 2}],
  },
  content:{
    marginHorizontal: 20,
    marginTop: 30,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  contentImg:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top:30,
  },
  image:{
    width: 300,
    height: 300,
    resizeMode: 'contain',
  }
})