//Home.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav style={{ backgroundColor: 'darkblue', padding: '10px', color: 'white' }}>
        <NavLink to="/about" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>About</NavLink>
        <NavLink to="/view-profiles" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>View Profiles</NavLink>
        <NavLink to="/view-chats" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>View Chats</NavLink>
      </nav>
      
      {/* Your main content goes here */}
      <h1>Welcome to the Home Page</h1>
      {/* Add more content as needed */}
    </div>
  );
};

export default Home;
