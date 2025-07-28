function Header () {
  console.log("Header")
  return (
    <div className="flex flex-col justify-center items-center pb-5 pt-30 text-[#00ffc8]">
      <h1 className="text-3xl">Tu Rickpedia interdimensional</h1>
      <img src="/rickandmorty_header.png" alt="rickandmorty_header" className="w-96" />
    </div>
  )
}

export default Header