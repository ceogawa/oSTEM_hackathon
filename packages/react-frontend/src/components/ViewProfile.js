// ViewProfiles.js
import React from 'react';
import Profile from './Profile';

const ViewProfiles = () => {
  // Hardcoded profile data
  const hardcodedProfile = {
    name: 'Bob',
    interests: ['Badminton', 'Tennis', 'Basketball'],
    movies: ['Enola Holmes', 'The Night At The Museum'],
  };

  return (
    <div>
      <h1>View Profiles</h1>
      <Profile {...hardcodedProfile} />
    </div>
  );
};

export default ViewProfiles;
