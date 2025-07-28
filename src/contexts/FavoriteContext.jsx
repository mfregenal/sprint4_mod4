import { createContext, useContext } from "react";
import useFavorite from "../hooks/useFavorite";

// 1- DEFINIR EL CONTEXTO
const FavoriteContext = createContext() // CREA UN CONTENEDOR DE DATOS

// 2- CREAR EL PROVIDER
export const FavoriteProvider = ({ children }) => {

  console.log("favoriteContext")

  const favorite = useFavorite()

  return (
    // EXPONE EL ESTADO Y FUNCIONES A TODOS LOS COMPONENTES QUE ESTÉN ADENTRO
    <FavoriteContext.Provider value={favorite}> 
      {children}
    </FavoriteContext.Provider>
  )
}

// 3- CREAR UN CUSTOM HOOK PARA CONSUMIR EL CONTEXTO
export function useFavoriteContext() {
  return useContext(FavoriteContext) // PERMITE A CUALQUIER COMPONENTE ACCEDER A LOS DATOS FÁCILMENTE
}