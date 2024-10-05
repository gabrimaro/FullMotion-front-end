import React, { useState } from 'react';
import { Modal } from '../components/modal';
import '../css/modal.css';
import '../css/patientList.css';
import PatientList from '../patientComponents/PatientList';


export default function Patients() {
    const [modalOpen, setModalOpen] = useState(false)
    return (

        <>
            <h1>Patients</h1>
            <a href="/patient_dashboard">to patient dash</a>

            <PatientList />
            <button className='btn' onClick={() => setModalOpen(true)}> Add Patient</button>
            {modalOpen && (<Modal closeModal={()=> {setModalOpen(false);}} /> )}



        </>
    )
}