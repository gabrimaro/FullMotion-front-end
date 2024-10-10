import React, { useState } from 'react';
import axios from 'axios';
//import App from "./App.js";
//import './style.css'; // Import your CSS file


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', { username: username, password: password });
            //Sends username and password to backend for login authentication
            window.location.href = '/dashboard.html';
            //If log in is successful, redirects to dashboard
            alert('success');


        } catch (error) {
            alert('Login failed' + error);
        }
    };
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
                    const response = await axios.post('http://localhost:8080/register', {
                        username,
                        password,
                    });
                    //Sends username and password to backend for user registration
                    setSuccessMessage('Registration was successful!');
                    //If registration is successful, displays message
                    alert("Success");
                    // Optionally, redirect or reset form fields here
                } catch (error) {
                    alert(error);
    }
    };

    return (
    <div>
    {!isRegistering ? (
       <form className="login-container" onSubmit={handleSubmit}>
       <h1 class="label">Therapist Login</h1>
       <div className="loginForm">
                   <input
                       type="text"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       placeholder="Username"
                       required
                   />
                   <br />
                   <input
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password"
                       required
                   />
                   <br />
                   <button type="submit">Login</button>
                   <br />
                   <button type="button" onClick={() => setIsRegistering(true)}>Register</button>
                </div>
               </form>

           ) : (

           <form className="login-container" onSubmit={handleRegisterSubmit}>
                  <div className="loginForm">

                                   <input
                                       type="text"
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}
                                       placeholder="Username"
                                       required
                                   />
                                   <br />
                                   <input
                                       type="password"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                       placeholder="Password"
                                       required
                                   />
                               <br />
                               <button type="submit">Register</button>
                               <br />
                               {successMessage && <p className="success">{successMessage}</p>} {/* Display success message */}
                               <button type="button" onClick={() => setIsRegistering(false)}>Back to Login</button>
                           </div>
                           </form>

           )}
           </div>
           );
};

   export default Login;
