import React, { useState } from 'react';
import { Modal } from '../components/modal';
import { PatientList } from '../components/patientList';
import '../css/modal.css';
import '../css/patientList.css';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import Axios from 'axios';

export default function Patients() {
    const { auth, setAuth } = useAuth();
    const [rows, setRows] = useState([])
    const [addBool, setAddBool] = useState(false)

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDOB] = useState('')
    const [pEmail, setpEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [notes, setNotes] = useState('')

    const username = auth?.username
    const email = auth?.email
    const prefix = auth?.prefix
    const firstname = auth?.firstName
    const lastname = auth?.lastName
    const suffix = auth?.suffix
    const info = auth?.info

    const getPatients = async() => {
        try {
            const response = await Axios.post("http://localhost:8080/patients/user/"+username,
                {
                }
            );

            let patients = response?.data

            setRows(response?.data)
            
            setAuth({username, email, prefix, firstname, lastname, suffix, info, patients})
            console.log(response?.data)
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
                    username: username
                }
            );

            console.log(response)
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPatients();
    }, [addBool])

    return (
        <div className='patientList'>
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
                        value={pEmail}
                        onChange={(e) => setpEmail(e.target.value)}
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