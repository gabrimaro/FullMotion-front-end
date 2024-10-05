import "../css/Navbar.css"
import {NavLink} from 'react-router-dom'
import pfp from '../assets/pfp.jpg';

export default function Navbar() {
    return (
        <>
            <nav class="nav-bar">
                <ul>
                    <li class="logo"><a href="/">FullMotion</a></li>
                    <li class="nav-item">
                        <NavLink to="/" className="nav-link"><i class="bx bxs-grid-alt"></i><span className="nav-text">Dashboard</span></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/patients" className="nav-link"><i class="bx bx-body"></i><span className="nav-text">Patients</span></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/notifications" className="nav-link"><i class="bx bxs-bell"></i><span className="nav-text">Notifications</span></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/appointments" className="nav-link"><i class="bx bxs-calendar"></i><span className="nav-text">Appointments</span></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/messages" className="nav-link"><i class="bx bxs-message-dots"></i><span className="nav-text">Messages</span></NavLink>
                    </li>
                    <li><NavLink to="/profile"><img src={pfp} alt="me" class="userPFP"/></NavLink></li>
                </ul>
            </nav>
        </>
    )
}