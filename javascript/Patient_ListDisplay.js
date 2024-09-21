import React, { useState } from 'react';

function PatientList() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      phoneNumber: '123-456-7890',
      homeAddress: '123 Main St, Anytown, USA'
    },
    {
      id: 2,
      name: 'John Smith',
      email: 'johnsmith@example.com',
      phoneNumber: '098-765-4321',
      homeAddress: '456 Elm St, Othertown, USA'
    }
  ]);

  return (
    <div>
      <h1>Patient List</h1>
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