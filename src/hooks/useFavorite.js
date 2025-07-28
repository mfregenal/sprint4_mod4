import { useState, useEffect } from "react";

function useFavorite() {
  const key = 'favoritesList' // KEY PARA EL LOCALSTORAGE

  const [myFavoritesList, setMyFavoritesList] = useState([])

  useEffect(() => {
    const initialList = JSON.parse(localStorage.getItem(key)) || [] //CONVERTIR A OBJ DE JAVASCRIPT
    setMyFavoritesList(initialList); //CARGO EL LISTADO DE PERSONAJES FAVORITOS GUARDADOS EN LOCALSTORAGE
    console.log("favorite hook")
  }, []);

  // AGREGAR NUEVO PERSONAJE A MYFAVORITESLIST (HANDLER)
  const addCharacter = (newCharacter) => {

    const characterExists = myFavoritesList.some( character => character.id === newCharacter.id ) // VERIFICAMOS SI EXISTE EL PERSONAJE EN EL LISTADO

    if (characterExists) return // EVITAMOS QUE EL PERSONAJE SE REPITA

    const newFavoritesList = [...myFavoritesList, newCharacter]

    setMyFavoritesList( newFavoritesList )
    localStorage.setItem(key, JSON.stringify(newFavoritesList)) //CONVERTIR A FORMATO JSON
  }

  // ELIMINAR UN PERSONAJE DE MYFAVORITESLIST
  const deleteCharacter = (id) => {
    const newFavoritesList = myFavoritesList.filter ( character => character.id !== id )
    if (newFavoritesList.length === 0){
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newFavoritesList))
    }
    setMyFavoritesList(newFavoritesList)
  }

  //LIMPIAR LISTA
  const limpiarFavoritos = () => {
    setMyFavoritesList([])
    localStorage.removeItem(key)
  }

  // RETORNO LAS FUNCIONES PARA SU USO
  return {
    myFavoritesList,
    addCharacter,
    deleteCharacter,
    limpiarFavoritos
  }
}

export default useFavorite