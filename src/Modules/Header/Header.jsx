import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    <div>
      <nav>
        <ul>
            <li> <Link to="/">Acceuil</Link> </li>
            <li> <Link to="/recherche">Rechercher</Link> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
