import { useState } from "react"
import { useFavoriteContext } from "../contexts/FavoriteContext"
import Bar from "./Bar"
import FavoriteCards from "./FavoriteCards"

function FavSection() {
  console.log("FavSection")

  const [amount, setAmount] = useState(15)

  const { myFavoritesList, limpiarFavoritos } = useFavoriteContext()

  const isFavoritesEmpty = myFavoritesList.length === 0

  return (
    <section id="favoritos" className="scroll-mt-25">
      <div className="flex justify-between items-center w-full bg-[#00ffc8] p-2">
        <div className="flex gap-8">
          <h2><i className={`bi bi-heart mr-2`}></i>Tus personajes favoritos</h2>
          <select className="border rounded-2xl px-2" onChange={(e) => setAmount(e.target.value)}>
            <option value="15">Por Defecto</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        <div>
          <button className="bg-[#0b1120] text-white px-2 rounded hover:scale-105 hover:text-red-500"
                  onClick={() => {limpiarFavoritos()}}>
                    Limpiar Favoritos
          </button>
        </div>
      </div>

      {
        isFavoritesEmpty ? <p className="text-white text-center p-2">No posee una lista de favoritos</p> : <FavoriteCards amount={Number(amount)}/>
      }
    </section>
  )
}

export default FavSection