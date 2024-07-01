import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../services/api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const courses = await fetchCourses();
      setCourses(courses);
    };
    getCourses();
  }, []);

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.name}</td>
            <td>{course.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
