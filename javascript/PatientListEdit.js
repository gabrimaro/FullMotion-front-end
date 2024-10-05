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

  const [editingPatient, setEditingPatient] = useState(null);

  const handleEdit = (patient) => {
    setEditingPatient(patient);
  };

  const handleSave = (patient) => {
    const updatedPatients = patients.map((p) => (p.id === patient.id ? patient : p));
    setPatients(updatedPatients);
    setEditingPatient(null);
  };

  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {editingPatient === patient ? (
              <form>
                <label>
                  Name:
                  <input type="text" value={patient.name} onChange={(event) => handleSave({ ...patient, name: event.target.value })} />
                </label>
                <br />
                <label>
                  Email:
                  <input type="email" value={patient.email} onChange={(event) => handleSave({ ...patient, email: event.target.value })} />
                </label>
                <br />
                <label>
                  Phone Number:
                  <input type="tel" value={patient.phoneNumber} onChange={(event) => handleSave({ ...patient, phoneNumber: event.target.value })} />
                </label>
                <br />
                <label>
                  Home Address:
                  <input type="text" value={patient.homeAddress} onChange={(event) => handleSave({ ...patient, homeAddress: event.target.value })} />
                </label>
                <br />
                <button type="submit">Save</button>
              </form>
            ) : (
              <div>
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
                <button onClick={() => handleEdit(patient)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
