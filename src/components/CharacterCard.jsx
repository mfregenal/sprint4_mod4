import { useFavoriteContext } from "../contexts/FavoriteContext"

function CharacterCard ( {character, isFavorite, heartColor}) {
    const { addCharacter, deleteCharacter } = useFavoriteContext() 

  return (
    <div key={character.id} className="border-4 border-[#00ffc8] w-2xs rounded-2xl">
      <div className="relative w-fit">
        <img src={character.image} alt={character.name} className="rounded-t-2xl" />
        <button onClick={() => {isFavorite ? deleteCharacter(character) : addCharacter(character)}}>
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
}

export default CharacterCard