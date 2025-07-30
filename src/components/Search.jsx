import { useRef, useState } from "react"
import { toast } from 'react-toastify'
import ListCards from "./ListCards"


function Search() {

  const inputRef = useRef(null)
  const [name, setName] = useState('')
  const [showCards, setShowCards] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!inputRef.current.value.trim()){
      toast("Debe escribir el nombre de un personaje")
      setShowCards(false)
      return
    }

    setName(inputRef.current.value)
    setShowCards(true)
  }

  return (
    <>
      <div className="flex flex-col space-y-2 text-white justify-center items-center m-10 w-full">
        <form onSubmit={handleSubmit} className="space-x-4 flex">
          <input ref={inputRef} type="text" placeholder="Busca tu personaje" className="bg-sky-800 text-white p-2 rounded-2xl"/>

          <button type="submit"><i className="bi bi-search text-2xl hover:text-[#00ffc8]"></i></button>
        </form>
      </div>
      {
        showCards && <ListCards name={name} />
      }
    </>
  )
}

export default Search