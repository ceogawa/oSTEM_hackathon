// Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ViewProfiles from './ViewProfile';
import { AuthProvider } from '../context/AuthProvider';
import { useAuth } from '../context/AuthProvider';
import '../LogoutButton.css';
import ProtectedRoute  from "../utils/ProtectedRoute";
import { useNavigate } from "react-router-dom";

const AppRoutes = () => {

  return (
    
    <AuthProvider>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      <Route path="/profiles" element={<ProtectedRoute><ViewProfiles /></ProtectedRoute>} />
      {/* Add other routes as needed */}
    </Routes>
    </AuthProvider>
    
  );
};

export default AppRoutes;

