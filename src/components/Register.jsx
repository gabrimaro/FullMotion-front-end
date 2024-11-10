import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import '../css/Register.css'

export default function Register({setSuccess}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeat, setShowRepeat] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (password != repeat) {
            setErrMsg('Passwords are not the same.')
        }

        try {
            const response = await Axios.post("http://localhost:8080/register",
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
                setErrMsg("Registration Failed")
            }
        }
    }

    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                <div className="name-inp">
                    <input
                        id="fname"
                        type="text"
                        placeholder="First Name"
                        name='fname'
                        autoComplete="off"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        required
                    />
                    <input
                        id="lname"
                        type="text"
                        placeholder="Last Name"
                        name='lname'
                        autoComplete="off"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        required
                    />
                </div>
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
                <div className="pass-inp">
                    <label htmlFor="repeat"><i class='bx bxs-lock-alt'></i></label>
                    <input
                        id="password"
                        type='password'
                        placeholder="Repeat Password"
                        name='repeat'
                        autoComplete="off"
                        value={repeat}
                        onChange={(e) => setRepeat(e.target.value)}
                        required
                    />
                    <div className="eye" onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? <i class='bx bxs-hide' ></i> : <i class='bx bxs-show' ></i>}</div>
                </div>
                <button id="submit" type='submit'>Submit</button>
            </form>
            <i>Already have an account? <a href="/login">Log In</a></i>
        </div>
    )
}7