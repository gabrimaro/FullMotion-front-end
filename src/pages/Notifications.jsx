import '../css/Notifications.css';






export default function Notifications() {


    return (
        <div className="notifs">
        
            <h1>Notifications</h1>
        
        <div className='notifsList'>
            <table className='notifTable'>
                <thead>
                    <tr>
                        
                        <th>Notifications</th>
                        <th>Patient</th>
                        <th>Priority</th>
                        <th>Time</th>
                        <th>       </th>
                    </tr>
                </thead>

                <tbody>           
                    <tr>
                        
                        <td>Patient has exceeded ROM threshold.</td>
                        <td>Jane Doe</td>
                        <td className='priority'>High</td>
                        <td> 
                            October 30, 2024 10:15am
                        </td>
                        <td>
                            <div className='pProfile-btn' onClick={() => window.location.href = "/patient_dashboard"}>
                                    Go to Patient Profile
                            </div>
                        </td>
                    </tr>
                    <tr>
                        
                        <td>Patient has left you a message</td>
                        <td>Jane Doe</td>
                        <td className='priority'>Moderate</td>
                        <td> 
                            October 30, 2024 07:15am
                        </td>
                        <td>
                            <div className='pProfile-btn' onClick={() => window.location.href = "/patient_dashboard"}>
                                    Go to Patient Profile
                            </div>
                        </td>
                    </tr>
                    <tr>
                        
                        <td>Patient has not completed exercises for the day.</td>
                        <td>Jane Doe</td>
                        <td className='priority'>Low</td>
                        <td> 
                            October 29, 2024 11:59pm
                        </td>
                        <td>
                            <div className='pProfile-btn' onClick={() => window.location.href = "/patient_dashboard"}>
                                    Go to Patient Profile
                            </div>
                        </td>
                    </tr>
                

            </tbody>

        </table>
    </div>
        </div>
        
    )

}