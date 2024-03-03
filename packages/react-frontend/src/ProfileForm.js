// ProfileForm.js
import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import './ProfileForm.css'; // Import the CSS file

const ProfileForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    pronouns: '',
    genderIdentity: '',
    sexualOrientation: '',
    age: '',
    sportsInterest: '',
    sportsDetails: '',
    booksInterest: '',
    booksDetails: '',
    moviesInterest: '',
    moviesDetails: '',
    socialCausesInterest: '',
    socialCausesDetails: '',
    additionalInfo: '',
  });

  // Handler to update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate("/home");
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      {/* Name, Pronouns, Gender Identity, Sexual Orientation, Age */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Pronouns:
        <input
          type="text"
          name="pronouns"
          value={formData.pronouns}
          onChange={handleChange}
        />
      </label>
      <label>
        Gender Identity:
        <input
          type="text"
          name="genderIdentity"
          value={formData.genderIdentity}
          onChange={handleChange}
        />
      </label>
      <label>
        Sexual Orientation:
        <input
          type="text"
          name="sexualOrientation"
          value={formData.sexualOrientation}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>

      {/* Sports Section */}
      <h5>Are you interested in Sports?</h5>
      <select
        name="sportsInterest"
        value={formData.sportsInterest}
        onChange={handleChange}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="maybe">Maybe</option>
      </select>
      {formData.sportsInterest === 'yes' && (
        <input
          type="text"
          name="sportsDetails"
          placeholder="Specify which sport"
          value={formData.sportsDetails}
          onChange={handleChange}
        />
      )}

      <h5>Are you interested in Books?</h5>
      <select
        name="booksInterest"
        value={formData.booksInterest}
        onChange={handleChange}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="maybe">Maybe</option>
      </select>
      {formData.booksInterest === 'yes' && (
        <input
          type="text"
          name="booksDetails"
          placeholder="Specify which books"
          value={formData.booksDetails}
          onChange={handleChange}
        />
      )}

      <h5>Are you interested in Movies?</h5>
      <select
        name="moviesInterest"
        value={formData.moviesInterest}
        onChange={handleChange}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="maybe">Maybe</option>
      </select>
      {formData.moviesInterest === 'yes' && (
        <input
          type="text"
          name="moviesDetails"
          placeholder="Specify which movies"
          value={formData.moviesDetails}
          onChange={handleChange}
        />
      )}

      <h5>Are you involved in Social Causes?</h5>
      <select
        name="socialCausesInterest"
        value={formData.socialCausesInterest}
        onChange={handleChange}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="maybe">Maybe</option>
      </select>
      {formData.socialCausesInterest === 'yes' && (
        <input
          type="text"
          name="socialCausesDetails"
          placeholder="Specify which social causes"
          value={formData.socialCausesDetails}
          onChange={handleChange}
        />
      )}

      {/* Additional Information */}
      <h5>What do you like to do in your free time?</h5>
      <textarea
        name="additionalInfo"
        placeholder="Anything else you want to share"
        value={formData.additionalInfo}
        onChange={handleChange}
      />

      <button style={{ backgroundColor: 'rgb(48, 60, 190)', color: 'white', padding: '10px 15px', margin: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}type="submit">
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;
