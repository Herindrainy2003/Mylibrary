import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { searchBooks} from '../../Redux/Search/Reducers';
import { Link } from 'react-router-dom';

function SearchBar() {
  const dispatch = useDispatch();
  const [state , setState]= useState('')
  const onSubmitHandle = (e) => {
    e.preventDefault()
    dispatch(searchBooks(state))
  
  }
  return (
    <div>
      <div className="bar">
        <form onSubmit={onSubmitHandle}>
            <input type="text" placeholder='Recherche' onChange={(e)=>setState(e.target.value)}  />
            <button type='submit'>Rechercher</button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
