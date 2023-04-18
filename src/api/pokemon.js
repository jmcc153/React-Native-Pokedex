import { API_HOST } from "../utils/constants";

export async function getPokemonApi(limit = 20, offset = 0, nextUrl) {
  try{
    const url = `${API_HOST}/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(nextUrl || url);
    const result = await response.json();
    return result;
  }
  catch(error){
    throw error;
  }
}
export async function getPokemonDetailsByUrl(url) {
  try{
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }
  catch(error){
    throw error;
  }
}

export async function getPokemonDetailsApi(id) {
  try{
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }
  catch(error){
    throw error;
  }
}