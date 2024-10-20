import React, { useState } from 'react';
import { Modal } from '../components/modal';
import { PatientList } from '../components/patientList';
import '../css/modal.css';
import '../css/patientList.css';


export default function Patients() {
    const [modalOpen, setModalOpen] = useState(false)

    //Storafe for patient data
    const [rows, setRows] = useState([ //can have empty for demonstartion. just sample data for testing
        {name: "Jane Doe", number: "000-000-0000", status:"active"}, 
        {name: "John Adams", number: "111-111-1111", status:"active"}
    ]);

    const [rowToEdit, setRowToEdit] = useState(null);

    const deleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
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

        <>
            <h1>Patients</h1>
            <a href="/patient_dashboard">to patient dash</a>

            <PatientList rows={rows} deletePatient={deleteRow} editRow={handleEditRow}/>
            <button className='btn' onClick={() => setModalOpen(true)}> Add Patient</button>
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



        </>
    )
}