import FavSection from "./components/FavSection"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import SearchSection from "./components/SearchSection"
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="bg-[#0b1120] h-screen" style={{ fontFamily: 'Orbitron' }}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      <NavBar />
      <Header />
      <FavSection />
      <SearchSection />
    </div>
  )
}

export default App
