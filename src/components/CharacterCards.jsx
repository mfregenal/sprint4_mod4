import { useCharacter } from "../contexts/CharacterContext"
import { useFavoriteContext } from "../contexts/FavoriteContext"
import { useEffect, useState } from "react"
import { CircleLoader } from "react-spinners"

function CharacterCards ( {name} ) {
  console.log("CharacterCards")

  const [page, setPage] = useState(1)

  const { characterData, loading, error, getCharacter } = useCharacter()
  const { myFavoritesList, addCharacter, deleteCharacter } = useFavoriteContext()

  const totalPages = characterData?.info?.pages
  const results = characterData?.results

  useEffect(() => {
    getCharacter(name)
    setPage(1)
  }, [name])

  const handlePageChange = (newPage) => {
    setPage(newPage)
    getCharacter(name, newPage)
  }

  return (
    <>
      { loading ? <div className="flex flex-col items-center text-[#3cff44] pb-10"><CircleLoader size={100} speedMultiplier={1} color="#3cff44"/> <p>Buscando..</p></div>
                : results?.length > 1 && name ?
                  <div className="grid max-lg:grid-cols-2 grid-cols-5 gap-20 text-white pb-10">
                    { results.map ( (character) => {
                        const isFavorite = myFavoritesList.some( fav => fav.id === character.id )

                        const heartColor = isFavorite ? "text-red-500" : "text-white"

                        return (
                          <div key={character.id} className="border-4 border-[#00ffc8] w-2xs rounded-2xl">
                            <div className="relative w-fit">
                              <img src={character.image} alt={character.name} className="rounded-t-2xl" />
                              <button onClick={() => {isFavorite ? deleteCharacter(character.id) : addCharacter(character)}}>
                                <i className={`bi bi-suit-heart-fill absolute top-3 right-3 bg-black/60 p-1 rounded text-2xl ${heartColor} hover:scale-125 transition-transform cursor-pointer`}></i>
                              </button>
                            </div>

                            <div className="flex flex-col justify-center m-2 space-y-2">
                              <p className="text-xl">Nombre: <span className="text-[#00ffc8]">{character.name}</span></p>
                              <p className="text-xl">Estado: <span className="text-[#00ffc8]">{character.status}</span></p>
                              <p className="text-xl">Especie: <span className="text-[#00ffc8]">{character.species}</span></p>
                              <p className="text-xl">Genero: <span className="text-[#00ffc8]">{character.gender}</span></p>
                              <p className="text-xl">Ubicación: <span className="text-[#00ffc8]">{character.location.name}</span></p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                : <p className="text-white pb-10">{error}</p>
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

export default CharacterCards