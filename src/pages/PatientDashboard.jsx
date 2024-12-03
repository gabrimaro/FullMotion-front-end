import DataContainer from '../components/DataContainer'
import NotifCenter from '../components/NotifCenter.jsx'
import { Scale } from '../components/Scale.jsx'
import SensorData from '../components/SensorData.jsx'
import Timer from '../components/Timer.jsx'
import '../css/PatientDashboard.css'
import blank_profile from "../images/blank_profile.webp"
import filler_chart from '../images/filler_chart.png'
import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom"


export default function PatientDashboard() {
    const [params, setParams] = useSearchParams()
    const patientID = params.get('id')

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false)

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDOB] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [notes, setNotes] = useState('')

    const [editNotes, setEditNotes] = useState(false)

    const getPatientInfo = async(e) => {
        /*
        const response = await Axios.post("",
            {
            }
        );

        const patient = response?.data[0]
        */

        setName('Jane Doe')
        setAge('24')
        setGender('Female')
        setDOB('01/01/2000')
        setJob('Accountant')
        setEmail('email@example.com')
        setPhone('(757) 555-0101')
        setMobile('(757) 555-0202')
        setNotes('')
    }

    const updateNotes = async(e) => {
        setNotes(e.target.value)
        /*
        const response = await Axios.post("",
            {
                notes: notes
            }
        );

        const patient = response?.data[0]
        */

        setName('Jane Doe')
        setAge('24')
        setGender('Female')
        setDOB('01/01/2000')
        setJob('Accountant')
        setEmail('email@example.com')
        setPhone('(757) 555-0101')
        setMobile('(757) 555-0202')
        
    }

        useEffect(() => {
            getPatientInfo()
        },[]);

    return (
        <div className="patient-dash">
            <div className="patient-info">
                <img src={blank_profile} alt="" class="patient-img" />
                <h2>Jane Doe</h2>
                <div class="info">
                    <div>
                        <i>Age</i>
                        <p>{age}</p>
                    </div>
                    <div>
                        <i>Gender</i>
                        <p>{gender}</p>
                    </div>
                    <div>
                        <i>Date of Birth</i>
                        <p>{dob}</p>
                    </div>
                    <div>
                        <i>Occupation</i>
                        <p>{job}</p>
                    </div>
                    <hr />
                    <div class="contact-info">
                        <i>Contact Information</i>
                        <div class="contact">
                            <i class='bx bxs-envelope'></i>
                            <p title="myemail@email.com">{email}</p>
                        </div>
                        <div class="contact">
                            <i class='bx bxs-phone'></i>
                            <p>{phone}</p>
                        </div>
                        <div class="contact">
                            <i class='bx bx-mobile'></i>
                            <p>{mobile}</p>
                        </div>
                    </div>
                    <hr />
                    <div class="appointments">
                        <i>Upcoming Appointments</i>
                        <div class="date">
                            <p>09/23/2024</p>
                            <p>10:00am</p>
                        </div>
                        <div class="date">
                            <p>10/21/2024</p>
                            <p>10:00am</p>
                        </div>
                        <div class="date">
                            <p>11/18/2024</p>
                            <p>10:00am</p>
                        </div>
                    </div>
                    <hr />
                    <div class="patient-notes">
                        <i>Notes</i>
                        <p>{notes}</p>
                        <i class='edit-notes bx bxs-pencil' onClick={(e) => {setEditNotes(true)}}></i>
                    </div>
                </div>
                <div class={"edit-popup "+(editNotes ? 'active' : 'inactive')}>
                    <div class="inner">
                        <div class="top">
                            <h1>Edit Patient Info</h1>
                            <i class='bx bxs-message-square-x close-edit' onClick={(e) => {setEditNotes(false)}}></i>
                        </div>
                        <textarea value={notes} onChange={updateNotes}></textarea>
                    </div>
                </div>
            </div>
            <div className="sensor-data">
                <DataContainer className='data motion' title='Motion'>
                    <SensorData className='sensor' title='Angle'>
                        <Scale isRunning={isRunning} elapsedTime={elapsedTime} isPaused={isPaused}/>
                    </SensorData>
                    <SensorData className='sensor' title='ROM'>
                        <img src={filler_chart} alt="" />
                    </SensorData>
                </DataContainer>
                <DataContainer className='data posture' title='Posture'>
                    <SensorData className='sensor' title='Center of Mass'>
                        <img src={filler_chart} alt="" />
                    </SensorData>
                </DataContainer>
                <DataContainer className='data pressure' title='Force and Pressure'>
                    <SensorData className='sensor' title='Pressure on Joint'>
                        <img src={filler_chart} alt="" />
                    </SensorData>
                </DataContainer>
                <DataContainer className='data heart' title='Heart Rate'>
                    <SensorData className='sensor' title='Heart Rate'>
                        <img src={filler_chart} alt="" />
                    </SensorData>
                </DataContainer>
                <DataContainer className='data temp' title='Temperature and Sweat' />
            </div>
            <div className="right">
                <Timer isRunning={isRunning} setIsRunning={setIsRunning} elapsedTime={elapsedTime} setElapsedTime={setElapsedTime} setIsPaused={setIsPaused}/>
                <NotifCenter />
            </div>
        </div>
    )
}