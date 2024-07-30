
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 My React App</p>
      <Link to="/counter">Counter</Link>
    </footer>
  );
};

export default Footer;
