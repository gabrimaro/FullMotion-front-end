import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import '../css/Login.css'

export default function LoginHandler({setSuccess}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const response = await Axios.post("http://localhost:8080/login",
                {
                    username: username,
                    password: password
                }
            );

        window.location.href = '/'
        
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
                console.log(err)
            }
            else if (err?.response.status === 401) {
                setErrMsg('Username or Password Not Found')
            }
            else {
                setErrMsg("Login Failed")
            }
        }
    }

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                <div className="user-inp">
                    <label htmlFor="username"><i class='bx bxs-user'></i></label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        name='username'
                        autoComplete="off"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="pass-inp">
                    <label htmlFor="password"><i class='bx bxs-lock-alt'></i></label>
                    <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        name='password'
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="eye" onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? <i class='bx bxs-hide' ></i> : <i class='bx bxs-show' ></i>}</div>
                </div>
                <button id="submit" type='submit'>Submit</button>
            </form>
            <i>Don't have an account? <a href="/register">Request an Account</a></i>
        </div>
    )
}7