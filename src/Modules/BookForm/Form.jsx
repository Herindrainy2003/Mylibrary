import React from 'react'
import "./Form.css"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { AddBookReducers } from '../../Redux/Add/Reducers';

function AddBook() {
 //destructing React hook form(useForm)
  const {register , handleSubmit , reset} = useForm();
  const dispatch = useDispatch()
  
 
 const submitHandler = (data)=>{
   dispatch(AddBookReducers(data));
   reset();
   window.location.reload();
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input type="text" {...register('titre' , {required : true})} placeholder='Titre' />
        <input type="text" {...register('auteur' , {required : true})} placeholder='Auteur' />
        <button type='submit'>Ajouter</button>
      </form>
    </div>
  )
}

export default AddBook
