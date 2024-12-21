import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './sidebar.css'; // Add your sidebar styles

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">Home</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/login" className="sidebar-link">Login</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/register" className="sidebar-link">Register</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/about" className="sidebar-link">About</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
