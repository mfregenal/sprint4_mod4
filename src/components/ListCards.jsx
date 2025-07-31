import { useCharacter } from "../contexts/CharacterContext"
import { useFavoriteContext } from "../contexts/FavoriteContext"
import { useEffect, useState } from "react"
import { CircleLoader } from "react-spinners"
import { toast } from 'react-toastify'
import CharacterCard from "./CharacterCard"

function ListCards ( {name} ) {

  const [page, setPage] = useState(1)

  const { characterData, loading, error, getCharacter } = useCharacter()
  const { myFavoritesList } = useFavoriteContext()

  const totalPages = characterData?.info?.pages
  const totalCharacter = characterData?.info?.count
  const results = characterData?.results

  useEffect(() => {
    handlePageChange(1)
  }, [name])

  useEffect(() => {
    if(totalCharacter){
      toast(
        <div className="flex flex-col items-center">
          <p><strong>Escaneo Rickipedia completado</strong></p>
          <p>{totalCharacter} entidades detectadas bajo el patrón: <em className="text-[#00ffc8]">"{name}"</em></p>
        </div>
      )
    }
  }, [totalCharacter])

  const handlePageChange = (newPage) => {
    getCharacter(name, newPage)
    setPage(newPage)
  }

  return (
    <>
      { loading ? <div className="flex flex-col items-center text-[#3cff44] pb-10"><CircleLoader size={100} speedMultiplier={1} color="#3cff44"/> <p>Buscando..</p></div>
                : results?.length > 0 && name ?
                  <div className="grid max-lg:grid-cols-2 grid-cols-5 gap-20 text-white pb-10">
                    { results.map ( (character) => {
                        const isFavorite = myFavoritesList.some( fav => fav.id === character.id )

                        const heartColor = isFavorite ? "text-red-500" : "text-white"

                        return (
                          <CharacterCard key={character.id} character={character} isFavorite={isFavorite} heartColor={heartColor} />
                        )
                      })
                    }
                  </div>
                : <p className="text-red-500">{error}</p>
      }

      { ( totalPages > 1 && name )&&
        <div className="flex items-center space-x-4 pb-10">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-[#00ffc8] text-black rounded hover:bg-cyan-400 disabled:opacity-50"
          >
            ← Anterior
          </button>

          <p className="text-white text-lg">Página {page} de {totalPages}</p>
          
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 bg-[#00ffc8] text-black rounded hover:bg-cyan-400 disabled:opacity-50"
          >
            Siguiente →
          </button>
        </div>
      }
    </>
  )
}

export default ListCards