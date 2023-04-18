import { POKEMON_TYPE_COLORS } from "./constants";

const getColorByPokemon = (pokemon) => {
  return POKEMON_TYPE_COLORS[pokemon.toLowerCase()];
}

export default getColorByPokemon;