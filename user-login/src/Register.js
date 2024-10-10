import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {
             const response = await axios.post('http://localhost:8080/register', {
                username: username,
                password: password
            });
            alert(response);
            setMessage('Registration successful');
        } catch (error) {
            if (error.response) {
                setMessage(`Registration failed: ${error.response.data}`);
            } else if (error.request) {
                setMessage('Registration failed: No response from server\n' + error.message);
            } else {
                setMessage(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
ReactDOM.render(<Login />, document.getElementById('root'));

export default Register;
