import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Students from './components/Students';
import Courses from './components/Courses';
import Enrollments from './components/Enrollments';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className={isLoggedIn ? "App with-nav" : "App"}>
      {isLoggedIn && <Navigation setIsLoggedIn={setIsLoggedIn} />}
      <div className={isLoggedIn ? "content" : "no-nav-content"}>
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/students" element={isLoggedIn ? <Students /> : <Navigate to="/login" />} />
          <Route path="/courses" element={isLoggedIn ? <Courses /> : <Navigate to="/login" />} />
          <Route path="/enrollments" element={isLoggedIn ? <Enrollments /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
