import { RiDeleteBin4Fill } from "react-icons/ri"; 
import { MdDeleteOutline } from "react-icons/md";
import React, { useEffect } from 'react'
import './Display.css'
import { useSelector } from 'react-redux'
function Display() {
  // const books = useSelector((state) => state.book.Books)
  const books = JSON.parse(localStorage.getItem('books'))

  const deleteBook = (titre) => {
    //recuperation de titre de livres a supprimmer 
    const bookToRemove = books.find((book) => book.titre === titre)
    if (bookToRemove) {
      const updatedData = books.filter((book) => book.titre !== titre)

      localStorage.setItem('books', JSON.stringify(updatedData));
      window.location.reload();
    } else {
      alert("L'élément à supprimer n'a pas été trouvé dans le localStorage.")
    }
  }


  //supprimer tous
  const removeAll = () => {
    localStorage.removeItem('books');
    window.location.reload();
  }
  return (
    <>
   
      {books ? books.map((book, index) => {
          return (
            <div className='body' key={index}>
              <p>Titre  : {book.titre} </p>
              <p>Auteur  : {book.auteur}</p>
              <p><MdDeleteOutline onClick={() => deleteBook(book.titre)} /></p>
            </div>
          ) 
        }) : (
            <div>
              <h1>Aucun Livres</h1>
            </div>
        )
      }
      <p style={{textAlign:'center' , color :'red'}}>REMOVE ALL<RiDeleteBin4Fill  onClick={()=>removeAll()}/></p>
    </>


  )
}

export default Display
