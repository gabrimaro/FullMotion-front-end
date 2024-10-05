import React from 'react';
import '../css/patientList.css';

import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";


export const PatientList = ({ rows, deletePatient, editRow }) => {
    return (
    <div className='PatientTable'>
        <table className='Ptable'>
            <thead>
                <tr>
                    <th className='expand'>Name</th>
                    <th>Phone Number</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {rows.map((row, idx) => {
                    const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);
                    return (
                        <tr key={idx}>
                            <td>{row.name}</td>
                            <td className='pnumber'>{row.number}</td>
                            <td> 
                                <span className={`label label-${row.status}`}>
                                    {statusText}
                                </span>
                            </td>
                            <td>
                                <span className='actions'>
                                    <BsFillTrashFill className='delete-btn' onClick={() => deletePatient(idx)}/>
                                    <BsFillPencilFill onClick={() => editRow(idx)}/>
                                </span>
                            </td>
                        </tr>
                    );
                })}

            </tbody>

        </table>
    </div>

    )
 
};