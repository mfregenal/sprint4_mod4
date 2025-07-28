import Bar from "./Bar"
import Search from "./Search"

function SearchSection() {
  console.log("SearchSection")
  return (
    <section id="busqueda" className="flex flex-col items-center bg-[#0b1120] scroll-mt-25">
      <Bar titulo="Busca tu personaje" icon="search"/>

      <Search />
    </section>
  )
}

export default SearchSection