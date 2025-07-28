import axios from "axios"

export const fetchCharacter = async (name, page) => {
  console.log("API")
  const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
  const response = await axios.get(url)
  return response.data
}