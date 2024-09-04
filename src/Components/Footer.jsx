import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

    <nav className="footer-nav">
      <ul className="footer-links">
          <li><Link to="/">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="https://www.linkedin.com/in/shivani-hagone" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/ShivaniHagone" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </nav>
      <hr className="hr"></hr>
      <p className="copyright">&copy; 2024 Shivani Hagone. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
