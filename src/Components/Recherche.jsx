import React from 'react'
import SearchBar from '../Modules/RechercheBar'
import RechercheDisplay from '../Modules/RechercheDisplay'
import Header from '../Modules/Header/Header'

function Recherche() {
  return (
    <div>
      <Header />
      <SearchBar />
      <RechercheDisplay />
    </div>
  )
}

export default Recherche
