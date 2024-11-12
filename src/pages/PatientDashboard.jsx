import DataContainer from '../components/DataContainer'
import NotifCenter from '../components/NotifCenter.jsx'
import { Scale } from '../components/Scale.jsx'
import SensorData from '../components/SensorData.jsx'
import Timer from '../components/Timer.jsx'
import '../css/PatientDashboard.css'
import blank_profile from "../images/blank_profile.webp"
import filler_chart from '../images/filler_chart.png'
import { useState, useRef } from 'react'


export default function PatientDashboard() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    return (
        <div className="patient-dash">
            <div className="patient-info">
                <img src={blank_profile} alt="" class="patient-img" />
                <h2>Jane Doe</h2>
                <div class="info">
                    <div>
                        <i>Age</i>
                        <p>24</p>
                    </div>
                    <div>
                        <i>Gender</i>
                        <p>Female</p>
                    </div>
                    <div>
                        <i>Date of Birth</i>
                        <p>01/01/2000</p>
                    </div>
                    <div>
                        <i>Occupation</i>
                        <p>Accountant</p>
                    </div>
                    <hr />
                    <div class="contact-info">
                        <i>Contact Information</i>
                        <div class="contact">
                            <i class='bx bxs-envelope'></i>
                            <p title="myemail@email.com">myemail@email.com</p>
                        </div>
                        <div class="contact">
                            <i class='bx bxs-phone'></i>
                            <p>(757) 555-1234</p>
                        </div>
                        <div class="contact">
                            <i class='bx bx-mobile'></i>
                            <p>(757) 555-6789</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non magna a dolor venenatis iaculis vel vitae ligula. Nulla pharetra urna quis ante pellentesque molestie. Sed vitae convallis mauris, a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non magna a dolor venenatis iaculis vel vitae ligula. Nulla pharetra urna quis ante pellentesque molestie. Sed vitae convallis mauris, a. </p>
                        <i class='edit-notes bx bxs-pencil'></i>
                    </div>
                </div>
                <div class="popup edit-popup">
                    <div class="inner">
                        <div class="top">
                            <h1>Edit Patient Info</h1>
                            <i class='bx bxs-message-square-x close-button close-edit'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sensor-data">
                <DataContainer className='data motion' title='Motion'>
                    <SensorData className='sensor' title='Angle'>
                        <Scale isRunning={isRunning} elapsedTime={elapsedTime} />
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
                <Timer isRunning={isRunning} setIsRunning={setIsRunning} elapsedTime={elapsedTime} setElapsedTime={setElapsedTime} intervalIdRef={intervalIdRef} startTimeRef={startTimeRef} />
                <NotifCenter />
            </div>
        </div>
    )
}