import React, { useState } from 'react';

function PatientList() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      homeAddress: '123 Main St, Anytown, USA'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      phoneNumber: '098-765-4321',
      homeAddress: '456 Elm St, Othertown, USA'
    }
  ]);

  const [newPatient, setNewPatient] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    homeAddress: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPatientId = patients.length + 1;
    const newPatientData = { ...newPatient, id: newPatientId };
    setPatients([...patients, newPatientData]);
    setNewPatient({
      name: '',
      email: '',
      phoneNumber: '',
      homeAddress: ''
    });
  };

  return (
    <div>
      <h1>Patient List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={newPatient.name} onChange={(event) => setNewPatient({ ...newPatient, name: event.target.value })} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={newPatient.email} onChange={(event) => setNewPatient({ ...newPatient, email: event.target.value })} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" value={newPatient.phoneNumber} onChange={(event) => setNewPatient({ ...newPatient, phoneNumber: event.target.value })} />
        </label>
        <br />
        <label>
          Home Address:
          <input type="text" value={newPatient.homeAddress} onChange={(event) => setNewPatient({ ...newPatient, homeAddress: event.target.value })} />
        </label>
        <br />
        <button type="submit">Add Patient</button>
      </form>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <p>
              <strong>Name:</strong> {patient.name}
            </p>
            <p>
              <strong>Email:</strong> {patient.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {patient.phoneNumber}
            </p>
            <p>
              <strong>Home Address:</strong> {patient.homeAddress}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
