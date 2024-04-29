import React from 'react'
import Header from '../Modules/Header/Header'
import AddBook from '../Modules/BookForm/Form'
import Display from '../Modules/DisplayBook/Display'

function Aceuil() {
  return (
    <div>
      <Header />
      <AddBook />
      <Display />
    </div>
  )
}

export default Aceuil
