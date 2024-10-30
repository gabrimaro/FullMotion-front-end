import React, { useState } from 'react';
import pfp from '../assets/pfp.jpg';
import '../css/Dashboard.css';



export default function Dashboard() {


    const [state, setState] = useState(1);
    const action = (index) => {
        setState(index)
        console.log(index)
    }




    return (
        <div className="tContainer">

            <div className='tProfile'>
                <img src={pfp} alt="me" class="pfp"/>
                <div className='Tname'>
                    <h1> Dr. Johnson Johnson</h1>
                    <h2> Physical Therapist</h2> 
                </div>

            </div>
            <div className='tDetails'>

                <div className="tabs">
                    <div onClick={()=>action(1)} className={`${state===1 ? 'tab active-tab' : 'tab'}`}>
                        Overview
                    </div>
                    <div onClick={()=>action(2)}  className={`${state===2 ? 'tab active-tab' : 'tab'}`}>
                         Personal Details
                     </div>
                    <div onClick={()=>action(3)}  className={`${state===3 ? 'tab active-tab' : 'tab'}`}>
                        Settings
                    </div>

                </div>
                <div className="contents">
                    <div className={`${state===1 ? 'content active-content' : 'content'}`}>
                        <h2>Overview</h2>
                        <p>Location: </p>
                    </div>
                    <div className={`${state===2 ? 'content active-content' : 'content'}`}>
                        <h2>Personal Details</h2>
                        <p>Full Name:  </p>
                    </div>
                    <div className={`${state===3 ? 'content active-content' : 'content'}`}>
                        <h2>Settings</h2>
                        <div className='logout-btn' onClick={() => window.location.href = "logout"}>
                                Logout
                        </div>
                    </div>
                </div>



            </div>


        </div>
    )
}