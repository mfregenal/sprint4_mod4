import { useEffect, useMemo, useState } from "react"
import { useFavoriteContext } from "../contexts/FavoriteContext"
import CharacterCard from "./CharacterCard"

function FavoriteCards ( {amount} ) {

  const [page, setPage] = useState(1)

  const { myFavoritesList } = useFavoriteContext()

  useEffect(() => {
    setPage(1)
  }, [amount])

  const totalPages = useMemo( () => {
    return Math.ceil(myFavoritesList.length / amount)
  }, [myFavoritesList.length, amount])

  const visibleCharacters = useMemo(() => {
    const startIndex = (page - 1) * amount
    const endIndex = startIndex + amount
    return myFavoritesList.slice(startIndex, endIndex)
  }, [myFavoritesList, page, amount])

  return (
    <div className="flex flex-col items-center bg-[#0b1120]">
      <div className="grid max-lg:grid-cols-2 grid-cols-5 gap-20 text-white p-10">
        { visibleCharacters.map ( (character) => (
          <CharacterCard character={character} isFavorite={true} heartColor="text-red-500" />
          ))
        }
      </div>
      
      { 
        totalPages > 1 && 
        <div className="flex items-center space-x-4 pb-10">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-[#00ffc8] text-black rounded hover:bg-cyan-400 disabled:opacity-50"
          >
            ← Anterior
          </button>
          <p className="text-white text-lg">Página {page} de {totalPages}</p>
        
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 bg-[#00ffc8] text-black rounded hover:bg-cyan-400 disabled:opacity-50"
          >
            Siguiente →
          </button>
        </div>
      }
    </div>
  )
}

export default FavoriteCards