import '../css/Notifications.css';






export default function Notifications() {


    return (
        <div className="notifs">
        
            <h1 className='nHeading'>Notifications</h1>
        
        <div className='notifsList'>
            <table className='notifTable'>
                <thead>
                    <tr>
                        
                        <th>Notification</th>
                        <th>Patient</th>
                        <th>Priority</th>
                        <th>Time</th>
                        <th>       </th>
                    </tr>
                </thead>

                <tbody>           
                    <tr>
                        
                        <td>Missed session: Schedule follow-up</td>
                        <td>Jane Doe</td>
                        <td className='priority'>High</td>
                        <td> 
                            November 3, 2024 10:15am
                        </td>
                        <td>
                            <div className='pProfile-btn' onClick={() => window.location.href = "/patient_dashboard"}>
                                    Go to Patient Profile
                            </div>
                        </td>
                    </tr>
                    <tr>
                        
                        <td>Patient overdue for follow-up.</td>
                        <td>Jane Doe</td>
                        <td className='priority'>Moderate</td>
                        <td> 
                            October 17, 2024 07:15am
                        </td>
                        <td>
                            <div className='pProfile-btn' onClick={() => window.location.href = "/patient_dashboard"}>
                                    Go to Patient Profile
                            </div>
                        </td>
                    </tr>
                    <tr>
                        
                        <td>Patient overdue for follow-up.</td>
                        <td>Johm Adam</td>
                        <td className='priority'>Moderate</td>
                        <td> 
                            October 10, 2024 11:59pm
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