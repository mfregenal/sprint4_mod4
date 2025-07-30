import { useState } from "react"
import Search from "./Search"

function SearchSection() {

  const [showCard, setShowCard] = useState(true)

  const handleButton = () => {
    if(showCard)
      setShowCard(false)
    else
      setShowCard(true)
  }

  return (
    <section id="busqueda" className="flex flex-col items-center bg-[#0b1120] scroll-mt-25">
      <div className="flex justify-between items-center w-full bg-[#00ffc8] p-2">
        <div className="flex items-center">
          <div className="text-xl mr-4">
              <button onClick={() => handleButton()}>
                { showCard ? <i className="bi bi-arrow-down-square"></i> : <i className="bi bi-arrow-right-square"></i> }
              </button>
          </div>
          
          <h2><i className={`bi bi-search mr-2`}></i>Busca tu personaje</h2>
        </div>
      </div>
      { showCard ? <Search /> : <></> }
    </section>
  )
}

export default SearchSection