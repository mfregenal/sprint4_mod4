function NavBar () {
  console.log("NavBar")
  return (
    <>
      <nav className="p-2 flex items-center justify-evenly border-b-2 border-white fixed z-50 w-full top-0 bg-[#0b1120]">
        <img src="./rickandmorty_logo.png" alt="rickandmorty_logo" className="w-64" />
        <div className="flex items-center justify-center space-x-6 text-[#00ffc8] text-sm">
          <p><a className="flex flex-col items-center" href=""><i className="bi bi-house text-2xl"></i>Inicio</a></p>
          <p><a className="flex flex-col items-center" href="#favoritos"><i className="bi bi-heart text-2xl"></i>Favoritos</a></p>
          <p><a className="flex flex-col items-center" href="#busqueda"><i className="bi bi-search text-2xl"></i>Buscar</a></p>
        </div>
      </nav>
    </>
  )
}

export default NavBar