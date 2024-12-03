import React from 'react';
import '../css/patientList.css';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import Axios from 'axios';

import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

export const PatientList = ({ rows }) => {
    return (
    <div className='PatientTable'>
        <table className='Ptable'>
            <thead>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th> </th>
            </thead>

            <tbody>
                {rows.map((row, index) => {
                    return (
                        <tr key={index}>
                            <td className='name-row'><Link to={"/patients/dashboard?id="+row?.id}>{row.name}</Link></td>
                            <td className='phone-row'>{row?.number}</td>
                            <td className='status-row'> 
                                <span className={`label label-${row?.status}`}>
                                    {row?.status}
                                </span>
                            </td>
                            <td className='actions-row'>
                                <span className='actions'>
                                    <BsFillTrashFill className='delete-btn'/>
                                    <BsFillPencilFill/>
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