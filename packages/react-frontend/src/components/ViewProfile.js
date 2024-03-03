// ViewProfile.js
import React from 'react';
import Profile from './Profile';
import './ViewProfile.css';

const ViewProfiles = () => {
  // Hardcoded profile data
  const hardcodedProfile = {
    name: 'Bob',
    interests: ['Badminton', 'Tennis', 'Basketball'],
    movies: ['Enola Holmes', 'The Night At The Museum'],
  };

  return (
    <div>
      <h3>Search for your community here......</h3>
      <div className="profile-container">
        <Profile {...hardcodedProfile} />
      </div>
    </div>
  );
};

export default ViewProfiles;
