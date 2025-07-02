import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 SNAP News. All rights reserved.</p>

      <div className="social-links">
        <a
          href="https://www.facebook.com/profile.php?id=61577455006326"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaFacebook /> Follow us on Facebook
        </a>
      </div>

      <div className="footer-contact-btn">
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
