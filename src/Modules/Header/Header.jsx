import { AiOutlineBook } from "react-icons/ai"; 
import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    <div>
      <nav>
        <ul>
            <li> <Link to="/">Acceuil</Link> </li>
            <li> <Link to="/add">Ajouter</Link> </li>
            <li> <Link to="/library">Bibliotheques</Link> </li>
            <li> <Link to="/recherche">Rechercher</Link> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
