import axios from "axios"

export const fetchCharacter = async (name, page) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
  const response = await axios.get(url)
  return response.data
}