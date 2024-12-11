// PlacementOpportunities.jsx (Updated)
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PlacementOpportunities.css";

const PlacementOpportunities = () => {
    const navigate = useNavigate();
    const [resources, setResources] = useState([]);

    // Fetch resources from the backend when the component mounts
    useEffect(() => {
        fetch("http://localhost:8080/api/resources")
            .then((response) => response.json())
            .then((data) => setResources(data))
            .catch((error) => console.error("Error fetching resources:", error));
    }, []);

    return (
        <div className="resources-container">
            <h2>Available Resources for Placement Opportunities</h2>
            <div className="resource-grid">
                {resources.map((resource) => (
                    <div key={resource.id} className="resource-card">
                        {resource.coverPhotoUrl && (
                            <img
                                src={`http://localhost:8080${resource.coverPhotoUrl}`}
                                alt="Cover"
                                className="resource-cover"/>
                        )}
                        <h3>{resource.title}</h3>
                        <p>{resource.description}</p>
                        <button onClick={() => navigate(`/resource/${resource.id}`)}>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlacementOpportunities;