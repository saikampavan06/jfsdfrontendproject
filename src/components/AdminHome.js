import React, { useState } from 'react';
import './AdminHome.css';
import ManageUsers from './ManageUsers';
import { FaHome, FaUpload, FaFolder, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UploadForm from './UploadResource'; // Import Upload Form

function AdminHome() {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const navigate = useNavigate(); // Initialize navigate function

    // Array of companies with their logos
    const companies = [

        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
        { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
        { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },

        { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Adobe_Corporate_logo.svg" },
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" }
    ];

    // Function to render tab content
    const renderContent = () => {
        switch (activeTab) {
            case "Upload":
                return <UploadForm />;
            case "Organize":
                return (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "20px" }}>
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "8px",
                                    padding: "20px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    width: "200px",
                                    textAlign: "center",
                                    backgroundColor: "#f9f9f9",
                                    transition: "transform 0.3s ease-in-out"
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    style={{ width: "80px", height: "80px", marginBottom: "10px" }}
                                />
                                <h3 style={{ margin: "0", color: "#ff4d4d" }}>{company.name}</h3>
                            </div>
                        ))}
                    </div>
                );
            case "Manage":
                return <ManageUsers />;
            default:
                return <h2>Welcome to the Admin Dashboard</h2>;
        }
    };

    const handleLogout = () => {
        console.log("Logged out");
        navigate('/login'); // Redirects to the Login page
    };

    return (
        <div className="admin-home">
            <div className="sidebar">
                <h1 className="logo">Placement Portal</h1>
                <ul>
                    <li onClick={() => setActiveTab("Dashboard")} className={activeTab === "Dashboard" ? "active" : ""}>
                        <FaHome className="menu-icon" /> Dashboard
                    </li>
                    <li onClick={() => setActiveTab("Upload")} className={activeTab === "Upload" ? "active" : ""}>
                        <FaUpload className="menu-icon" /> Upload Job Applications
                    </li>
                    <li onClick={() => setActiveTab("Organize")} className={activeTab === "Organize" ? "active" : ""}>
                        <FaFolder className="menu-icon" /> Organize Job Applications
                    </li>
                    <li onClick={() => setActiveTab("Manage")} className={activeTab === "Manage" ? "active" : ""}>
                        <FaUsers className="menu-icon" /> Manage User Access
                    </li>
                </ul>
                <button className="logout-button" onClick={handleLogout}>
                    <FaSignOutAlt className="menu-icon" /> Logout
                </button>
            </div>
            <div className="main-content">
                {renderContent()}
            </div>
        </div>
    );
}

export default AdminHome;