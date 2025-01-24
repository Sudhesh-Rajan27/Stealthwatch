import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import myImage from '../Assests/icon.png';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    } else if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and contain at least one letter and one number');
      return;
    } else {
      setSuccess('Login Successful');
      setError('');
      navigate('/home');
    }
  };

  return (
    <section className='page1'>
    <div className="whole">
      <div className="taskbar">
        <img src={myImage} alt="icon" className="taskbar-icon" />
      </div>
      <div className="login-container">
        <h2>Create Account</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              placeholder='Enter your name'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              placeholder='Enter your mail-id'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              placeholder="At least 8 characters"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <div className="end">
        <hr />
        <h6>...Finer security at your service...</h6>
      </div>
    </div>
    </section>
  );
};

export default Login;
