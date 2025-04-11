import React, { useState } from 'react';
import "./Navbar2.css";
import logo from './logo.png'
import { useNavigate,Link } from 'react-router-dom';

const Navbar2 = () => {
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const navigation = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken')
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/postgreSQL Learning">PostgreSQL</Link>
        <Link to={'/Express Learning'}>Express.js</Link>
        <Link to="/React Learning">React.js</Link>
        <Link to={'/Node.JS Learning'}>Node.js</Link>
        <Link to="/Services">Services</Link>
        <Link to="/AboutDeveloper">Contact Developer</Link>
        <Link to="/Update-Account">Update Account</Link>
        <li><button className="logout-btn" onClick={navigation}>logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar2;
