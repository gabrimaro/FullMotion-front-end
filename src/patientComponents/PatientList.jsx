import React from 'react';
import '../css/patientList.css';

import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
export default function PatientList () {
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
            <tr>
                <td> Jane Doe </td>
                <td> 757 123 4567</td>
                <td> 
                    <span className='label label-active'>Active</span>
                </td>
                <td>
                    <span>
                        <BsFillTrashFill className='delete-btn'/>
                        <BsFillPencilFill/>

                    </span>
                </td>
            </tr>

            <tr>
                <td> John Doe </td>
                <td> 757 123 0000</td>
                <td> 
                    <span className='label label-inactive'>Inactive</span>
                </td>
                <td>
                    <span>
                        <BsFillTrashFill className='delete-btn'/>
                        <BsFillPencilFill />

                    </span>
                </td>
            </tr>

        </tbody>

        </table>
    </div>

    )
 
};