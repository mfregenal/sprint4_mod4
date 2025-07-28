import { useFavoriteContext } from "../contexts/FavoriteContext"

function Bar ( {titulo, icon, condicion} ) {
  console.log("Bar")

  const { limpiarFavoritos } = useFavoriteContext()

  return (
    <div className="flex justify-between items-center w-full bg-[#00ffc8] p-2">
      <div>
        <h2><i className={`bi bi-${icon} mr-2`}></i>{titulo}</h2>
      </div>
      <div>
        {condicion ? <button className="bg-[#0b1120] text-white px-2 rounded hover:scale-105 hover:text-red-500"
                              onClick={() => {limpiarFavoritos()}}>Limpiar Favoritos</button> : ""}
      </div>
    </div>
  )
}

export default Bar