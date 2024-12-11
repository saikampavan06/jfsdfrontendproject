import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBook, FaShoppingCart, FaHistory, FaUndoAlt, FaSignOutAlt, FaBars, FaHome, FaEnvelope } from 'react-icons/fa';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const username = localStorage.getItem('username');
      
      if (!username) {
        console.error("No username found in localStorage.");
        return;
      }
      
      try {
        const response = await fetch(`http://localhost:8080/api/user/${username}`);
        
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Failed to fetch user details. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleMailClick = () => {
    // Open Gmail directly in the browser to compose an email
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com";  // Replace with desired email address
  };

  return (
    <div className="home-container">
      {!isSidebarVisible && (
        <button onClick={toggleSidebar} className="menu-toggle">
          <FaBars />
        </button>
      )}

      {isSidebarVisible && (
        <aside className="sidebar">
          <h2 className="sidebar-title" onClick={() => setSidebarVisible(false)}>EduConnect</h2>
          <nav className="sidebar-menu">
            <button className="menu-item" onClick={() => navigate('/user-home')}>
              <FaHome className="menu-icon" /> Home
            </button>
            <button className="menu-item" onClick={() => navigate('/user-profile')}>
              <FaUser className="menu-icon" /> User Profile
            </button>
            <button className="menu-item" onClick={() => navigate('/borrow-books')}>
              <FaBook className="menu-icon" /> Borrow Books
            </button>
            <button className="menu-item" onClick={() => navigate('/buy-books')}>
              <FaShoppingCart className="menu-icon" /> Buy Books
            </button>
            <button className="menu-item" onClick={() => navigate('/history')}>
              <FaHistory className="menu-icon" /> History
            </button>
            <button className="menu-item" onClick={() => navigate('/return-books')}>
              <FaUndoAlt className="menu-icon" /> Return Books
            </button>
            {/* New Mail button */}
            <button className="menu-item" onClick={handleMailClick}>
              <FaEnvelope className="menu-icon" /> Mail
            </button>
          </nav>
          <button onClick={handleLogout} className="logout-button">
            <FaSignOutAlt className="menu-icon" /> Logout
          </button>
        </aside>
      )}

      <div className={`content-wrapper ${isSidebarVisible ? 'shifted-content' : ''}`}>
        <header className="header">
          <h1 className="header-title">User Profile</h1>
        </header>

        <div className="profile-content">
          {user ? (
            <div className="user-details">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </div>
          ) : (
            <p>Loading user details...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

