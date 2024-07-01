import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// export const login = async (username, password) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/auth/login`, {
//       username,
//       password
//     });
//     return response.data; 
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error;
//   }
// };

export const fetchStudents = async () => {
  const response = await axios.get(`${BASE_URL}/students`);
  return response.data;
};

export const fetchCourses = async () => {
  const response = await axios.get(`${BASE_URL}/courses`);
  return response.data;
};

export const fetchEnrollments = async () => {
  const response = await axios.get(`${BASE_URL}/enrollments`);
  return response.data;
};
