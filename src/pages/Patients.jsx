import React, { useState } from 'react';
import { Modal } from '../components/modal';
import { PatientList } from '../components/patientList';
import '../css/modal.css';
import '../css/patientList.css';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import Axios from 'axios';

export default function Patients() {
    const { auth } = useAuth();
    const username = auth?.username;
    const info = auth?.info;
    const [rows, setRows] = useState([])
    const [addBool, setAddBool] = useState(false)

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDOB] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [notes, setNotes] = useState('')

    const getPatients = async(e) => {
        e.preventDefault()
        try {
            const response = await Axios.post("http://localhost:8080/patients/user/"+username,
                {
                }
            );

            setRows(response?.data)
        }
        catch(err) {
            console.log(err)
        }
    }

    const addPatient = async(e) => {
        e.preventDefault()
        try {
            const response = await Axios.post("http://localhost:8080/patients/add",
                {
                    firstName: fname,
                    lastName: lname,
                    age: parseInt(age),
                    dateOfBirth: dob,
                    gender: gender,
                    email: email,
                    phone: phone,
                    notes: '',
                    user: info
                }
            );

            setRows(response?.data)
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='patientList'>
            <button onClick={getPatients}>button</button>
            <div className="top">
                <button className='pList-btn' onClick={() => setAddBool(true)}> 
                    <button className='btn' >Add Patient</button>
                </button>
            </div>
            <div className="bottom">
                <PatientList rows={rows}/>
            </div>
            <div className={'add-patient '+(addBool ? 'active' : 'inactive')}>
                <div className="inner">
                    <div className="top">
                        <button onClick={() => setAddBool(false)}>Close</button>
                    </div>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Date of Birth"
                        value={dob}
                        onChange={(e) => setDOB(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button onClick={addPatient}>Add Patient</button>
                </div>
            </div>
        </div>
    )
}