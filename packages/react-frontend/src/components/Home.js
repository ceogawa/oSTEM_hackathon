import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <nav style={{ display: 'flex', alignItems: 'center', backgroundColor: 'darkblue', padding: '10px', color: 'white' }}>
        <div onClick={toggleDropdown} style={{ cursor: 'pointer', fontSize: '25px', marginRight: '10px' }}>
          ☰
        </div>
        {showDropdown && (
          <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', backgroundColor: 'darkblue', marginLeft: '40px' }}>
            <NavLink to="/friends" style={{ color: 'white', textDecoration: 'none', padding: '5px' }}>Friends</NavLink>
            <NavLink to="/profiles" style={{ color: 'green', textDecoration: 'none', padding: '5px' }}>Bob</NavLink>
            <NavLink to="/alice" style={{ color: 'red', textDecoration: 'none', padding: '5px' }}>Alice</NavLink>
          </div>
        )}
        <NavLink to="/home" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>BeyondBinary</NavLink>
        <NavLink to="/profiles" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>View Community</NavLink>
        <NavLink to="/about" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Our Mission</NavLink>
        <NavLink to="/view-chats" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>View Chats</NavLink>
      </nav>

      {/* Your main content goes here */}
      <h1 style={{ color: '#E84E58' }}>Welcome ...</h1>
      <h3 style={{ color: '#303CBE' }}>Are you ready to find your community? We know how important it is to connect with those who share your identity. Help us in finding you compatible people to connect with. All prompts are optional and you will be able to change this information later on.</h3>

      {/* Add more content as needed */}
    </div>
  );
};

export default Home;
