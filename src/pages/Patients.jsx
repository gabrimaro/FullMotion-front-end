import React, { useEffect, useState } from 'react';
import { Modal } from '../components/modal';
import { PatientList } from '../components/patientList';
import '../css/modal.css';
import '../css/patientList.css';


export default function Patients() {
    const [modalOpen, setModalOpen] = useState(false)
    const [rows, setRows] = useState([]); ////Storage for patient data -initialize as empty array to fetch from API
    const [rowToEdit, setRowToEdit] = useState(null);

    // fetch existing patients from backend 
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('/api/patient');
                if (response.ok) {
                    const data = await response.json();
                    setRows(data);
                } else {
                    console.error('Error fetching patient data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchPatients();
    }, []);


    const deleteRow = async (targetIndex) => { //remove patient from list and database
        const patientId = rows[targetIndex].id; // Assume you have an id for each patient
    
        try {
            const response = await fetch(`/api/patient/${patientId}`, {
            method: 'DELETE',
        });
        
        if (response.ok) {
            setRows(rows.filter((_, idx) => idx !== targetIndex)); // Update local state
        }   
        else {
            console.error('Error deleting patient data');
        }
        } 
        catch (error) {
        console.error('Error:', error);
        }
    };

    const handleEditRow = (idx) => {
        setRowToEdit(idx);

        setModalOpen(true);
    } 

    const handleSubmit = (newRow) => {
        rowToEdit === null ?
        setRows([...rows, newRow]) 
        : setRows(
            rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
            })
        );
    };

    return (

        <div className='patientList'>

            <button className='pList-btn' onClick={() => setModalOpen(true)}> 
                <div className='btn' >Add Patient</div>
            </button>
            <PatientList rows={rows} deletePatient={deleteRow} editRow={handleEditRow}/>
            
            {modalOpen && (
                <Modal 
                    closeModal={()=> {
                        setModalOpen(false);
                        setRowToEdit(null);
                    }} 
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit != null && rows[rowToEdit]}
                /> 
            )}



        </div>
    )
}