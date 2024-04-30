import React from 'react'
import "./Form.css"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { AddBookReducers } from '../../Redux/Add/Reducers';
import {  useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
function AddBook() {
 //destructing React hook form(useForm)
  const {register , handleSubmit , reset} = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
 const submitHandler = (data)=>{
   dispatch(AddBookReducers(data));
   reset();
    navigate("/library")
   window.location.reload();
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
      <TextField id="filled-basic" label="Titre" {...register('titre' , {required : true})} variant="filled" />
      <TextField id="filled-basic" label="Auteur" {...register('auteur' , {required : true})} variant="filled" />
        <button type='submit'>Ajouter</button>
      </form>
    </div>
  )
}

export default AddBook
