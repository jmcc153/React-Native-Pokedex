import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constants";

export const getPokemonsFavoriteApi = async () => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITE_STORAGE);
    if (!favorites) return [];
    return JSON.parse(favorites);
  }
  catch (error) {
    return false;
  }
}

export const addPokemonFavoriteApi = async (id) => {
  try {
    const favorites = await getPokemonsFavoriteApi();
    favorites.push(id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    return false;
  }
}

export const deletePokemonFavoriteApi = async (id) => {
  try {
    const favorites = await getPokemonsFavoriteApi();
    const index = favorites.indexOf(id);
    if (index > -1) {
      favorites.splice(index, 1);
      await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    }
  } catch (error) {
    return false;
  }
}

export async function isFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    if (!favorites) return false;
    return favorites.includes(id);
  }
  catch (error) {
    return false;
  }
}