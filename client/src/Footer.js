import React from "react";
import "./Footer.css"; 
import logo from './Components/logo.png'
import { Link } from "react-router-dom";
//  import "~@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding Section */}
        <div className="footer-brand">
          <img src={logo} alt="App Logo" className="footer-logo" style={{borderRadius: "10px"}}/>
          <p>Fol App</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <a href="/">About</a>
          {/* <a href="/">Services</a> */}
          <Link to="/Services">Services</Link>
          <Link to="/AboutDeveloper">Contact</Link>
        </div>

    
        {/* <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div> */}
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fol App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
