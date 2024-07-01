import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../services/api';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const students = await fetchStudents();
      setStudents(students);
    };
    getStudents();
  }, []);

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
