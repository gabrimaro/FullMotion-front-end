import React, { useState } from 'react';

import "../css/modal.css";


export const Modal = ({closeModal, onSubmit, defaultValue}) => {

    const [formState, setFormState] = useState (
        defaultValue || { //puts the original data in the edit modal
        name: "",
        number: "",
        status: "active",
    });

    //error messages
    const [errors, setError] = useState("")

    //confirm inputs
    const validateForm = () => {
        if(formState.name && formState.number && formState.status){
            setError("")
            return true;
        } 
        else {
            let errorFields = [];
            for(const [key, value] of Object.entries(formState)){
                if(!value){
                    errorFields.push(key)
                }
            }
            setError(errorFields.join(" and "));
            return false;
        }
    }

    const handleChange = (e) => {  
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //so page does not refresh each time

        //check for valid inputs
        if (!validateForm()) return;

        onSubmit(formState)
        closeModal();
    };


  return (
  <div className='modalContainer' //if clicked outside of modal it will close it
    onClick={(e) =>{
        if(e.target.className === "modalContainer") closeModal();
    }}
  >



    <div className='modal'>
        <form>
            <div className='form-opt'>
                <label htmlFor='name'>Patient Full Name</label>
                <input name='name' value={formState.name} onChange={handleChange}/>
            </div>
            <div className='form-opt'>
                <label htmlFor='number'>Patient Phone Number</label>
                <input name='number' value={formState.number} onChange={handleChange}/>
            </div>
            <div className='form-opt'>
                <label htmlFor='status'>Status</label>
                <select name='status' value={formState.status} onChange={handleChange}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            {errors && <div className='error'>{`Please include patient ${errors}`}</div>}
            <button type="submit" className='btn' onClick={handleSubmit}>
                Submit
            </button>
        </form>

    </div>

  </div>
  )
};
