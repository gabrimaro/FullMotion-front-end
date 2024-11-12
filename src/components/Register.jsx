import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom"
import '../css/Register.css'

export default function Register({setSuccess}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeat, setShowRepeat] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [prefix, setPrefix] = useState('');
    const [suffix, setSuffix] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault()

        if (password != repeat) {
            setErrMsg('Passwords are not the same.')
        }

        try {
            const response = await Axios.post("http://localhost:8080/register",
                {
                    firstName: firstname,
                    lastName: lastname,
                    email: email,
                    username: username,
                    password: password,
                    prefix: prefix,
                    suffix: suffix
                }
            );

        navigate("/login", {replace:true})
        
        } catch (err) {
            setErrMsg(err.response?.data || "Registration Failed")
        }
    }

    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                <div className="name-inp">
                    <select
                        id="prefix"
                        name='prefix'
                        autoComplete="off"
                        value={prefix}
                        onChange={(e) => setPrefix(e.target.value)}
                    >
                        <option value="" className="default" selected>Prefix</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Miss">Miss</option>
                    </select>
                    <select
                        id="suffix"
                        name='suffix'
                        autoComplete="off"
                        value={suffix}
                        onChange={(e) => setSuffix(e.target.value)}
                    >
                        <option value="" selected>Suffix</option>
                        <option value="PhD">PhD</option>
                        <option value="M.D.">M.D.</option>
                        <option value="PA">PA</option>
                        <option value="NP">NP</option>
                    </select>
                </div>
                <div className="name-inp">
                    <input
                        id="fname"
                        type="text"
                        placeholder="First Name"
                        name='fname'
                        autoComplete="off"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                    <input
                        id="lname"
                        type="text"
                        placeholder="Last Name"
                        name='lname'
                        autoComplete="off"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
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
                <div className="email-inp">
                    <label htmlFor="email"><i class='bx bxs-envelope'></i></label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Email"
                        name='email'
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        type={showRepeat ? 'text' : 'password'}
                        placeholder="Repeat Password"
                        name='repeat'
                        autoComplete="off"
                        value={repeat}
                        onChange={(e) => setRepeat(e.target.value)}
                        required
                    />
                    <div className="eye" onClick={() => setShowRepeat((prev) => !prev)}>{showRepeat ? <i class='bx bxs-hide' ></i> : <i class='bx bxs-show' ></i>}</div>
                </div>
                <button id="submit" type='submit'>Submit</button>
            </form>
            <i>Already have an account? <a href="/login">Log In</a></i>
        </div>
    )
}7