import axios from "axios"

const APIRoute = import.meta.env.VITE_API_ROUTE

export const fetchCharacter = async (name, page) => {
  const url = `${APIRoute}?page=${page}&name=${name}`
  const response = await axios.get(url)
  return response.data
}