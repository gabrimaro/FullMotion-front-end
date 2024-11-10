import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import './css/App.css'
import './css/env.css'
import Dashboard from './pages/Dashboard.jsx'
import Notifications from './pages/Notifications.jsx'
import PatientDashboard from './pages/PatientDashboard.jsx'
import LoginHandler from './pages/LoginHandler.jsx'
import RegisterHandler from './pages/RegisterHandler.jsx'
import Patients from './pages/Patients.jsx'


export default function App() {
  return (
    <div class="wrapper">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginHandler />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<RegisterHandler />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patient_dashboard" element={<PatientDashboard />} />
        <Route path="/notifications" element={<Notifications />} />

      </Routes>
    </div>
  )
}