import React, { useState } from 'react';

import "../css/modal.css";




export const Modal = ({ closeModal, onSubmit, defaultValue }) => {

    const [formState, setFormState] = useState(
        defaultValue || { 
            name: "",
            number: "",
            status: "active",
        }
    );

    // error messages and loading state
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);

    // validate inputs
    const validateForm = () => {
        if (formState.name && formState.number && formState.status) {
            setErrors(""); 
            return true;

        } 
        else {
            const errorFields = [];
        
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key);
                }
            }

            setErrors(errorFields.join(" and "));

            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value, 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // no page reload


        if (!validateForm()) return;

        setLoading(true); 
        try {
            const response = await fetch('/api/patient', { //send post request
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Send data as JSON
                },
                body: JSON.stringify(formState), // convert formstate to JSON 
            });


            if (response.ok) {
                console.log('Patient data saved successfully');
                setFormState({ name: '', number: '', status: 'active' });
                closeModal(); // close modal on successful submission
            } 
            else {
                console.error('Error saving patient data');
                setErrors('Error saving patient data');
            }
        }  
    
        catch (error) {
            console.error('Error:', error);
            setErrors('Unable to submit form');
        } 
        finally {
            setLoading(false); // reset loading state
        }
    };

    return (
    <div
        className='modalContainer' // if clicked outside of modal it will close it
        onClick={(e) => {
            if (e.target.className === "modalContainer") closeModal();
      } }
    >
        <div className='modal'>
            <form onSubmit={handleSubmit}>
                <div className='form-opt'>
                    <label htmlFor='name'>Patient Full Name</label>
                    <input
                    name='name'
                    value={formState.name}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className='form-opt'>
                    <label htmlFor='number'>Patient Phone Number</label>
                    <input
                    name='number'
                    value={formState.number}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className='form-opt'>
                    <label htmlFor='status'>Status</label>
                    <select name='status' value={formState.status} onChange={handleChange}>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>

                {errors && <div className='error'>{` ${errors}`}</div>}
                
                <button
                    type="submit"
                    className='btn'
                    disabled={loading} // disable button during loading
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>

            </form>
      </div>
    </div>
  );
};
