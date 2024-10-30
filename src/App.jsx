import './css/env.css'
import './css/App.css'
import Navbar from "./components/Navbar.jsx"
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Patients from './pages/Patients.jsx'
import PatientDashboard from './pages/PatientDashboard.jsx'
import LoginHandler from './pages/LoginHandler.jsx'
import RegisterHandler from './pages/RegisterHandler.jsx'

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
      </Routes>
    </div>
  )
}