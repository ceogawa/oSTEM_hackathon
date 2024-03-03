// Profile.js
import React, { useState } from 'react';

const Profile = ({ name, interests, movies }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleConnect = () => {
    // Implement the logic for connecting/send messages here
    alert(`Connect with ${name}`);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setChat((prevChat) => [...prevChat, { sender: 'You', message }]);
      setMessage('');
    }
  };

  return (
    <div className="profile-container">
      <h2>{name}'s Profile</h2>
      <button onClick={toggleDetails}style={{ backgroundColor: 'rgb(48, 60, 190)', color: 'white', padding: '10px 15px', margin: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
      {showDetails && (
        <div>
            <p>Hi, there ! This is Bob. I have included some of my interests in sports and movies below.</p>
            <p>Pronouns: He/They</p>
            <p>Gender Identity: Man</p>
            <p>Sexual Orientation: Bisexual</p>
          <p>Interest in Sports: {interests.join(', ')}</p>
          <p>Interest in Movies: {movies.join(', ')}</p>
          <button onClick={handleConnect} style={{ backgroundColor: 'rgb(48, 60, 190)', color: 'white', padding: '10px 15px', margin: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Connect</button>

          {/* Messaging Section */}
          <h3>Reachout to Bob...</h3>
          <div className="chat-container">
            {chat.map((message, index) => (
              <div key={index} className={message.sender === 'You' ? 'sent-message' : 'received-message'}>
                <strong>{message.sender}:</strong> {message.message}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message Bob"
          />
          <button onClick={handleSendMessage} style={{ backgroundColor: 'rgb(48, 60, 190)', color: 'white', padding: '10px 15px', margin: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
