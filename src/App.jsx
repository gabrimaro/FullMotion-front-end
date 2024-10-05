import { useState } from 'react';
import { Modal } from './components/modal';
import PatientList from './components/patientList';
import './css/App.css';

 function App() {
  const [modelOpen, setModalOpen] = useState (false)

  return (
    <>
    <div className='App'>
      
      <PatientList />
      <button className='btn' onClick={() => setModalOpen(true)}> Add Patient</button>
      {modelOpen && (<Modal closeModal={()=> {setModalOpen(false);}} /> )}

    </div>
    
    </>
  );
}

export default App;