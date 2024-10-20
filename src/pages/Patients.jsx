import React, { useState } from 'react';
import { Modal } from '../components/modal';
import { PatientList } from '../components/patientList';
import '../css/modal.css';
import '../css/patientList.css';


export default function Patients() {
    const [modalOpen, setModalOpen] = useState(false)

    //Storafe for patient data
    const [rows, setRows] = useState([ //can have empty for demonstartion. just sample data for testing
        {profile: "click", name: "Jane Doe", number: "000-000-0000", status:"active"}, 
        {profile: "click", name: "John Adams", number: "111-111-1111", status:"active"}
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