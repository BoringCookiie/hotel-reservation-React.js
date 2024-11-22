import React from 'react';
import { useNavigate } from 'react-router-dom';
import './usertype.css'; // Ensure your CSS styles are included

const UserType = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleUserTypeSelection = (type) => {
    // Store the user type in local storage or state if needed
    localStorage.setItem('userType', type); // Optional: store the user type
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="user-type-container">
      <h1 className="question">What are you?</h1>
      <div className="options">
        <button 
          className="btn btn-primary option-btn"
          onClick={() => handleUserTypeSelection('client')}
        >
          Client
        </button>
        <button 
          className="btn btn-secondary option-btn"
          onClick={() => handleUserTypeSelection('employe')}
        >
          Employé
        </button>
      </div>
    </div>
  );
};

export default UserType;
