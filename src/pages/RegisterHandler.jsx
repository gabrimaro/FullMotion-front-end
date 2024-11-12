import { useState, useEffect, useContext } from "react";
import Dashboard from './Dashboard.jsx'
import Login from '../components/Register.jsx'
import '../css/RegisterHandler.css'

export default function RegisterHandler() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [errMsg, setErrMsg] = useState('');

    return (
        <div className="main">
            {success ? (
                <Dashboard />
            ) : (
                <Login setSuccess={setSuccess}/>
            )}
        </div>
    )
}7