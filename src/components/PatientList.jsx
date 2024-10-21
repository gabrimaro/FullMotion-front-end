import React from 'react';
import '../css/patientList.css';

import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";


export const PatientList = ({ rows, deletePatient, editRow }) => {

    const handleDelete = (idx) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this patient from the system?"); //confirm deletion
        if (confirmDelete) {
            deletePatient(idx); 
        }
    };

    // minimum slots in table 
    const emptySlotsCount = 3; 



    return (
    <div className='PatientTable'>
        <table className='Ptable'>
            <thead>
                <tr>
                    <th> </th>
                    <th className='expand'>Name</th>
                    <th>Phone Number</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {rows.length > 0 ? (
                    rows.map((row, idx) => {
                        const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);
                        return (
                            <tr key={idx}>
                                <td>
                                    <div className='pProfile-btn' onClick={() => window.location.href = "/patient_dashboard"}>
                                            Profile
                                    </div>
                                </td>
                                <td>{row.name}</td>
                                <td className='pnumber'>{row.number}</td>
                                <td> 
                                    <span className={`label label-${row.status}`}>
                                        {statusText}
                                    </span>
                                </td>
                                <td>
                                    <span className='actions'>
                                        <BsFillTrashFill className='delete-btn' onClick={() => handleDelete(idx)}/>
                                        <BsFillPencilFill onClick={() => editRow(idx)}/>
                                    </span>
                                </td>
                            </tr>
                        );
                    })
                ) : (
                <tr>
                    <td colSpan="5">
                        No patients found. 
                    </td>
                </tr>                   
                )         
                }
                {/* Render empty slots if there are fewer than the desired total slots */}
                {rows.length < emptySlotsCount && (
                    Array.from({ length: emptySlotsCount - rows.length }, (_, idx) => (
                        <tr key={`empty-${idx}`}>
                            <td>
                                <div className='pProfile-btn' style={{ opacity: 0 }}>Profile</div>
                            </td>
                            <td></td>
                            <td className='pnumber'></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))
                )}


            </tbody>

        </table>
    </div>

    )
 
};