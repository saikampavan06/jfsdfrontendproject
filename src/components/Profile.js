import React, { useState } from 'react';
import './Profile.css';

function Profile() {
    const [profile, setProfile] = useState({
        name: "Pavan",
        email: "pavanteja@gmail.com",
        gender: "Male",
        contact: "9177782659",
        dateOfBirth: "2000-01-01",
        linkedin: "https://www.linkedin.com/in/saikam-pavan-teja-31a00428b/",
        github: "https://github.com/pavanteja06/jfsdsdpproject/tree/main/EducationalResourceLibrary",
        bio: "A passionate software developer who loves coding and solving problems.",
        skills: ["React.js", "Node.js", "MongoDB", "JavaScript"],
        image: null
    });

    const [isEditing, setIsEditing] = useState(false);
    const [updatedProfile, setUpdatedProfile] = useState({ ...profile });

    // Handle Input Change for Edit Form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProfile({ ...updatedProfile, [name]: value });
    };

    // Handle File Upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setUpdatedProfile({ ...updatedProfile, image: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // Save Edited Profile
    const handleSave = () => {
        setProfile(updatedProfile);
        setIsEditing(false);
    };

    return (
        <div className="profile-container">
            <h1 className="profile-title">Profile Page</h1>
            <div className="profile-card">
                <div className="profile-image">
                    <img 
                        src={profile.image || "https://cdn-icons-png.flaticon.com/512/2886/2886011.png"} 
                        alt="Profile" 
                    />
                </div>
                <div className="profile-details">
                    {isEditing ? (
                        <div className="edit-form">
                            <label>Profile Image: <input type="file" onChange={handleImageUpload} /></label>
                            <label>Name: <input type="text" name="name" value={updatedProfile.name} onChange={handleChange} /></label>
                            <label>Email: <input type="email" name="email" value={updatedProfile.email} onChange={handleChange} /></label>
                            <label>Gender: <input type="text" name="gender" value={updatedProfile.gender} onChange={handleChange} /></label>
                            <label>Contact: <input type="text" name="contact" value={updatedProfile.contact} onChange={handleChange} /></label>
                            <label>Date of Birth: <input type="date" name="dateOfBirth" value={updatedProfile.dateOfBirth} onChange={handleChange} /></label>
                            <label>LinkedIn: <input type="url" name="linkedin" value={updatedProfile.linkedin} onChange={handleChange} /></label>
                            <label>GitHub: <input type="url" name="github" value={updatedProfile.github} onChange={handleChange} /></label>
                            <label>Bio: <textarea name="bio" value={updatedProfile.bio} onChange={handleChange}></textarea></label>
                            <label>Skills: 
                                <input 
                                    type="text" 
                                    name="skills" 
                                    value={updatedProfile.skills.join(', ')} 
                                    onChange={(e) => setUpdatedProfile({ ...updatedProfile, skills: e.target.value.split(', ') })}
                                />
                            </label>
                            <button onClick={handleSave}>Save</button>
                        </div>
                    ) : (
                        <>
                            <h2>{profile.name}</h2>
                            <p><strong>Email:</strong> {profile.email}</p>
                            <p><strong>Gender:</strong> {profile.gender}</p>
                            <p><strong>Contact:</strong> {profile.contact}</p>
                            <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
                            <p><strong>LinkedIn:</strong> <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">View LinkedIn</a></p>
                            <p><strong>GitHub:</strong> <a href={profile.github} target="_blank" rel="noopener noreferrer">View GitHub</a></p>
                            <p><strong>Bio:</strong> {profile.bio}</p>
                            <p><strong>Skills:</strong> {profile.skills.join(", ")}</p>
                            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
