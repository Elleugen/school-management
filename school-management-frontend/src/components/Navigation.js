import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="side-navigation">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/enrollments">Enrollments</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navigation;
