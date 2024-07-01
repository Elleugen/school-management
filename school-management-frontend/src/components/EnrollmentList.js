import React, { useEffect, useState } from 'react';
import { fetchEnrollments } from '../services/api';

const EnrollmentList = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const getEnrollments = async () => {
      const enrollments = await fetchEnrollments();
      setEnrollments(enrollments);
    };
    getEnrollments();
  }, []);

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Student ID</th>
          <th>Course ID</th>
          <th>Enrollment Date</th>
        </tr>
      </thead>
      <tbody>
        {enrollments.map(enrollment => (
          <tr key={enrollment.id}>
            <td>{enrollment.id}</td>
            <td>{enrollment.studentId}</td>
            <td>{enrollment.courseId}</td>
            <td>{enrollment.enrollmentDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EnrollmentList;
