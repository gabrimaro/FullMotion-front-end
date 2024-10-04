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

  const handleDelete = (patientId) => {
    const
