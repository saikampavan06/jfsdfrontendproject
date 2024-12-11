import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminHome from './components/AdminHome';
import UserHome from './components/UserHome';
import FacultyHome from './components/FacultyHome';
import ForgotPassword from './components/ForgotPassword';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';
import ResourceDetail from "./components/ResourceDetail";
import Welcome from './components/Welcome';
import PlacementOpportunities from './components/PlacementOpportunities';
import ResourceDetails from './components/ResourceDetail';
import PlacementMaterials from './components/PlacementMaterials';
import Profile from './components/Profile';
import Assignments from './components/Assignments';
import CertificationCourses from './components/CertificationCourses';
import Payment from './components/Payment';
import PlacementHistory from './components/PlacementHistory'; // Import PlacementHistory component
import Performance from './components/Performance'; // Import the new Performance component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin-home" element={<AdminHome />} />
                <Route path="/user-home" element={<UserHome />} />
                <Route path="/resource/:id" element={<ResourceDetail />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/faculty-home" element={<FacultyHome />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/placement-opportunities" element={<PlacementOpportunities />} />
                <Route path="/resource/:id" element={<ResourceDetails />} />
                <Route path="/placement-Materials" element={<PlacementMaterials />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/assignments" element={<Assignments />} />
                <Route path="/certification-courses" element={<CertificationCourses />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/placement-history" element={<PlacementHistory />} /> {/* New Route */}
                <Route path="/performance" element={<Performance />} /> {/* New Route for Performance */}
                
            </Routes>
        </Router>
    );
}

export default App;
