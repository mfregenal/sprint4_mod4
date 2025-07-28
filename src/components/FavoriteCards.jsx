import { useEffect, useState } from "react"
import { useFavoriteContext } from "../contexts/FavoriteContext"

function FavoriteCards ( {amount} ) {
  console.log("FavoriteCards")

  const [page, setPage] = useState(1)

  const { myFavoritesList, deleteCharacter } = useFavoriteContext()

  useEffect(() => {
    setPage(1)
  }, [amount])

  const totalPages = Math.ceil(myFavoritesList.length / amount)
  const startIndex = (page - 1) * amount
  const endIndex = startIndex + amount

  return (
    <div className="flex flex-col items-center bg-[#0b1120]">
      <div className="grid max-lg:grid-cols-2 grid-cols-5 gap-20 text-white p-10">
        { myFavoritesList.slice(startIndex, endIndex).map ( (character) => (
            <div key={character.id} className="border-4 border-[#00ffc8] w-2xs rounded-2xl">
              <div className="relative w-fit">
                <img src={character.image} alt={character.name} className="rounded-t-2xl" />
                <button onClick={() => deleteCharacter(character.id)}>
                  <i className={`bi bi-suit-heart-fill absolute top-3 right-3 bg-black/60 p-1 rounded text-2xl text-red-500 hover:scale-125 transition-transform cursor-pointer`}></i>
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