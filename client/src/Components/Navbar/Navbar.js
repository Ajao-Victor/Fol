import React, { useState } from 'react';
import "./Navbar.css";
import logo from './logo.png';
import { useNavigate,Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const navigation = () => {
    navigate('/Signin')
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
        <Link to="/Services">Services</Link>
        <Link to="/AboutDeveloper">Contact</Link>
        <li><button className="logout-btn" onClick={navigation}>Signin/Signup</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
