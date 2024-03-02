// MyApp.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProfileForm from './ProfileForm';
import Home from './Home';
import { AuthProvider } from './context/AuthProvider';
import { useAuth } from './context/AuthProvider';
import { useNavigate } from "react-router-dom";
import './LogoutButton.css';
import ProtectedRoute  from "./utils/ProtectedRoute";

const LogoutButton = () => {
  const { value } = useAuth(); // Ensure you are extracting the correct property
  const { onLogout } = value;
  const navigate = useNavigate();
  const handleLogout = () => {
    
    onLogout();
    navigate('/login');
  };

  return (
    <button className="logout-button-container" onClick={handleLogout}>
      Logout
    </button>
  );
};

const MyApp = () => {
  return (
    <Router>
      <AuthProvider>
        <LogoutButton />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><ProfileForm /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default MyApp;
