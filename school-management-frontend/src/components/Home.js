import React, { useEffect, useState } from 'react';
import { fetchStudents, fetchCourses, fetchEnrollments } from '../services/api';
import { Card, CardContent, Typography, Box } from '@mui/material';
import StudentList from './StudentList';
import CourseList from './CourseList';

const Home = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [enrollmentCount, setEnrollmentCount] = useState(0);

  useEffect(() => {
    const getCounts = async () => {
      const students = await fetchStudents();
      setStudentCount(students.length);
      const courses = await fetchCourses();
      setCourseCount(courses.length);
      const enrollments = await fetchEnrollments();
      setEnrollmentCount(enrollments.length);
    };
    getCounts();
  }, []);

  return (
    <div className="home">
      <h2>Home</h2>
      <Card className="card-container">
        <h3>Overview</h3>
        <Box className="overview-container">
          <Card className="overview-card">
            <CardContent>
              <Typography variant="h6" color="textSecondary">Total Students</Typography>
              <Typography variant="h3" color="primary">
                {studentCount}
              </Typography>
            </CardContent>
          </Card>
          <Card className="overview-card">
            <CardContent>
              <Typography variant="h6" color="textSecondary">Total Courses</Typography>
              <Typography variant="h3" color="primary">
                {courseCount}
              </Typography>
            </CardContent>
          </Card>
          <Card className="overview-card">
            <CardContent>
              <Typography variant="h6" color="textSecondary">Total Enrollments</Typography>
              <Typography variant="h3" color="primary">
                {enrollmentCount}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Card>
      <div className="table-container">
        <h3>Students</h3>
        <StudentList />
      </div>
      <div className="table-container">
        <h3>Courses</h3>
        <CourseList />
      </div>
    </div>
  );
};

export default Home;
