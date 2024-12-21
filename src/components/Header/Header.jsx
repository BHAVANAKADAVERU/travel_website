import React from 'react';
import { FaBars } from 'react-icons/fa'; // Using react-icons for the hamburger icon
import './header.css'; // Add any header styling you may need

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header__content">
        {/* Hamburger Icon for Sidebar */}
        <div className="hamburger-icon" onClick={toggleSidebar}>
          <FaBars size={30} />
        </div>
        <h1 className="header__title">Travel Website</h1>
      </div>
    </header>
  );
};

export default Header;
