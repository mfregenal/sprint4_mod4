import { createContext, useContext, useState } from "react";
import { fetchCharacter } from "../services/characterAPI";

const CharacterContext = createContext()

export const CharacterProvider = ({ children }) => {

  console.log("CharacterContext")
  const [characterData, setCharacterData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getCharacter = async (name, page = 1) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetchCharacter(name, page)
      setCharacterData(response)
    } catch (err) {
      if (err.status === 404) {
        setError("Personaje no encontrado")
      } else {
        setError(err.message)
      }
      setCharacterData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <CharacterContext.Provider value={{ characterData, loading, error, getCharacter }}>
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharacter = () => useContext(CharacterContext)