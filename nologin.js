import React from 'react';
import './style.css';

const NoLogin = () => {
  return (
    <section className="login">
      <form action="">
        <div className="login-container">
          <h1 className="title">Inscription</h1> 
          <label htmlFor="name">Name</label>
          <div className="input-box">
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name" 
              className="login-input" 
              required
            />
          </div>
          <label htmlFor="familyName">Family Name</label>
          <div className="input-box">
            <input 
              type="text" 
              id="familyName" 
              name="familyname" 
              placeholder="Enter your family name" 
              className="login-input" 
              required
            />
          </div>
          <label htmlFor="email">E-mail</label>
          <div className="input-box">
            <input 
              type="email" 
              id="email" 
              name="login_email" 
              placeholder="Enter your email" 
              className="login-input" 
              required
            />
          </div>
          <label htmlFor="password">Password</label>
          <div className="input-box">
            <input 
              type="password" 
              id="password" 
              name="login_password" 
              placeholder="Enter your password" 
              className="login-input" 
              required
            />
          </div>
          <div className="btn-login">
            <input 
              type="submit" 
              id="login-btn" 
              name="login_btn" 
              value="S'inscrire" 
              className="btn"
            />
            <a href="/login" id="link" className="login-link">
              J'ai déjà un <span>compte</span> ?
            </a>
          </div>
        </div>
      </form>
    </section>
  );
};

export default NoLogin;
