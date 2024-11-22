import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate hook

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation (you can expand it)
    if (email && password) {
      // Redirect to 'employe.js' page after successful login
      navigate('/employe');
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <section className="login">
      <form onSubmit={handleLogin}>
        <div className="login-container">
          <h1 className="title">Login</h1>
          <label htmlFor="login-email">E-mail</label>
          <div className="input-box">
            <input
              type="email"
              id="login-email"
              name="login_email"
              placeholder="e-mail"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  // Update email state
              required
            />
          </div>
          <label htmlFor="login-password">Password</label>
          <div className="input-box">
            <input
              type="password"
              id="login-password"
              name="login_password"
              placeholder="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}  // Update password state
              required
            />
          </div>
          <div className="btn-login">
            <input
              type="submit"
              id="login-btn"
              name="login_btn"
              value="Login"
              className="btn"
            />
            <Link to="/nologin" id="link" className="login-link">
              You don't have an <span>account</span>?
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
