import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ResourceDetails.css';

const ResourceDetails = () => {
    const { id } = useParams(); // Fetch the resource ID from the URL
    const [resource, setResource] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [username, setUsername] = useState(''); // Assume you fetch the username from a login context

    // This effect is to simulate fetching the username
    useEffect(() => {
        // Fetch the resource details
        fetch(`http://localhost:8080/api/resources/${id}`)
            .then((response) => response.json())
            .then((data) => setResource(data))
            .catch((error) => console.error("Error fetching resource:", error));

        // Simulate fetching username from localStorage (or another source)
        const loggedInUsername = localStorage.getItem('username'); // Or use context if available
        setUsername(loggedInUsername);
    }, [id]);

    const handleApplyClick = () => {
        if (!username) {
            setSuccessMessage('Successful  !');
            return;
        }

        // Send application details to the backend
        fetch("http://localhost:8080/api/apply", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: username,
                resourceTitle: resource.title,
            }),
        })
        .then(response => response.json())
        .then(data => {
            setSuccessMessage(data.message); // Display success message
        })
        .catch(error => {
            setSuccessMessage("Error applying for resource. Please try again later.");
            console.error("Error applying for resource:", error);
        });
    };

    if (!resource) {
        return <div>Loading...</div>;
    }

    return (
        <div className="resource-details-container">
            <h2>{resource.title}</h2>
            <div className="resource-details">
                {resource.coverPhoto && (
                    <img
                        src={`http://localhost:8080${resource.coverPhoto}`}
                        alt="Cover"
                        className="resource-cover-photo"
                    />
                )}
                <p><strong>Description:</strong> {resource.description}</p>
                <p><strong>Category:</strong> {resource.category}</p>
                <p><strong>Tags:</strong> {resource.tags}</p>
                <p><strong>Publication Date:</strong> {resource.publicationDate}</p>

                {/* Apply Button */}
                <button onClick={handleApplyClick} className="apply-button">
                    Apply
                </button>

                {/* Display Success Message */}
                {successMessage && <div className="success-message">{successMessage}</div>}
            </div>
        </div>
    );
};

export default ResourceDetails;
