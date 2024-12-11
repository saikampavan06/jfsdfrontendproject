import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaBook,
  FaBriefcase,
  FaHistory,
  FaSignOutAlt,
  FaBars,
  FaEnvelope, // For Mail icon
  FaCertificate, // For Certification icon
  FaChartLine, // For Performance icon
  FaClipboard, // For Assignments icon
  FaUserCircle, // For Profile icon
} from "react-icons/fa";
import "./UserHome.css";

const UserHome = () => {
  const navigate = useNavigate();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Handle logout functionality
  const handleLogout = () => {
    navigate("/login"); // Redirect to the login page
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // Close sidebar
  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  // Handle clicks for different modules
  const handleModuleClick = (path) => {
    navigate(path); // Redirect to respective page
  };

  return (
    <div className="home-container">
      {/* Sidebar toggle button */}
      {!isSidebarVisible && (
        <button onClick={toggleSidebar} className="menu-toggle">
          <FaBars />
        </button>
      )}

      {/* Sidebar */}
      {isSidebarVisible && (
        <aside className="sidebar">
          <h2 className="sidebar-title" onClick={closeSidebar}>
            Placement Portal
          </h2>
          <nav className="sidebar-menu">
            {/* New order for Sidebar Menu Items */}
            <a
              className="menu-item"
              onClick={() => {
                navigate("/profile");
                closeSidebar();
              }}
            >
              <FaUserCircle className="menu-icon" /> Profile
            </a>
            <a
              className="menu-item"
              onClick={() => {
                navigate("/assignments");
                closeSidebar();
              }}
            >
              <FaClipboard className="menu-icon" /> Assignments
            </a>
            <a
              className="menu-item"
              onClick={() => {
                navigate("/certification-courses");
                closeSidebar();
              }}
            >
              <FaCertificate className="menu-icon" /> Certification Courses
            </a>
            <a
              className="menu-item"
              onClick={() => {
                navigate("/performance");
                closeSidebar();
              }}
            >
              <FaChartLine className="menu-icon" /> Performance
            </a>
            <a
              className="menu-item"
              onClick={() => {
                navigate("/placement-materials");
                closeSidebar();
              }}
            >
              <FaBook className="menu-icon" /> Preparation Material
            </a>
            <a
              className="menu-item"
              onClick={() => {
                navigate("/placement-opportunities");
                closeSidebar();
              }}
            >
              <FaBriefcase className="menu-icon" /> Placement Opportunities
            </a>
            <a
              className="menu-item"
              onClick={() => {
                navigate("/placement-history");
                closeSidebar();
              }}
            >
              <FaHistory className="menu-icon" /> Placement History
            </a>
            <a
              className="menu-item"
              onClick={() => {
                navigate("/mail");
                closeSidebar();
              }}
            >
              <FaEnvelope className="menu-icon" /> Mail
            </a>
          </nav>
          <button onClick={handleLogout} className="logout-button">
            <FaSignOutAlt className="menu-icon" /> Logout
          </button>
        </aside>
      )}

      {/* Main content */}
      <div
        className={`content-wrapper ${isSidebarVisible ? "shifted-content" : ""}`}
      >
        <header className="header">
          <h1 className="header-title">Welcome to Placement Portal</h1>
        </header>

        <div className="main-content">
          {/* Module Cards */}
          <div className="modules">
            {/* New order for Module Cards */}
            <div
              className="module-card"
              onClick={() => handleModuleClick("/profile")}
            >
              <FaUserCircle className="module-icon" />
              <p className="module-text">Profile</p>
            </div>
            <div
              className="module-card"
              onClick={() => handleModuleClick("/assignments")}
            >
              <FaClipboard className="module-icon" />
              <p className="module-text">Assignments</p>
            </div>
            <div
              className="module-card"
              onClick={() => handleModuleClick("/certification-courses")}
            >
              <FaCertificate className="module-icon" />
              <p className="module-text">Certification Courses</p>
            </div>
            <div
              className="module-card"
              onClick={() => handleModuleClick("/performance")}
            >
              <FaChartLine className="module-icon" />
              <p className="module-text">Performance</p>
            </div>
            <div
              className="module-card"
              onClick={() => handleModuleClick("/placement-materials")}
            >
              <FaBook className="module-icon" />
              <p className="module-text">Preparation Material</p>
            </div>
            <div
              className="module-card"
              onClick={() => handleModuleClick("/placement-opportunities")}
            >
              <FaBriefcase className="module-icon" />
              <p className="module-text">Opportunities</p>
            </div>
            <div
              className="module-card"
              onClick={() => handleModuleClick("/placement-history")}
            >
              <FaHistory className="module-icon" />
              <p className="module-text">Placement History</p>
            </div>
            <div
              className="module-card"
              onClick={() => handleModuleClick("/mail")}
            >
              <FaEnvelope className="module-icon" />
              <p className="module-text">Mail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;