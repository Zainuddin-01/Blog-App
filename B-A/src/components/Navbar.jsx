// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">My Blog</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
