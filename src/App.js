import React, { useState } from 'react';
import Sidebar from './components/sidebar'; // Sidebar import
import './App.css'; // Your global styles
import { FaBars } from 'react-icons/fa'; // Import hamburger icon from react-icons
import { Routes, Route } from 'react-router-dom'; // React Router for routing
import Home from './pages/Home'; // Example page import
import Login from './pages/Login'; // Example page import
import Register from './pages/Register'; // Example page import
import Footer from './components/Footer/Footer'; // Example Footer

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to track if sidebar is open or closed

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <FaBars size={30} />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
