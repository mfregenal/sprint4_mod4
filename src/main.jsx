import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CharacterProvider } from "./contexts/CharacterContext.jsx"
import { FavoriteProvider } from './contexts/FavoriteContext.jsx';

createRoot(document.getElementById('root')).render(

    <FavoriteProvider>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </FavoriteProvider>

)
