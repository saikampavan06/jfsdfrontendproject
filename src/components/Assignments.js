import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaRegClock } from 'react-icons/fa';
import './Assignments.css'; // Import the CSS for styling

// Modal Component
const Modal = ({ message, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{message}</h2>
                <button className="modal-close" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

const Assignments = () => {
    const [completedAssignments, setCompletedAssignments] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Sample assignments
    const assignments = [
        { id: 1, name: 'Data Structures', deadline: '2024-12-20', status: 'Pending', progress: 40 },
        { id: 2, name: 'Database Management', deadline: '2024-12-22', status: 'Pending', progress: 20 },
        { id: 3, name: 'Web Development', deadline: '2024-12-25', status: 'Completed', progress: 100 },
        { id: 4, name: 'Computer Networks', deadline: '2024-12-27', status: 'Pending', progress: 10 },
        { id: 5, name: 'Operating Systems', deadline: '2024-12-30', status: 'Pending', progress: 15 },
        { id: 6, name: 'Software Engineering', deadline: '2024-12-31', status: 'Completed', progress: 100 },
    ];

    // Toggle completion status
    const handleToggleCompletion = (id) => {
        setCompletedAssignments((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Handle submit button click
    const handleSubmit = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="assignments-container">
            <h1 className="page-title">Assignments</h1>
            <p className="page-description">Track, complete, and submit your assignments.</p>
            <div className="assignments-list">
                {assignments.map((assignment) => (
                    <div
                        key={assignment.id}
                        className={`assignment-card ${
                            completedAssignments.includes(assignment.id) ? 'completed' : 'pending'
                        }`}
                    >
                        <div className="assignment-info">
                            <h2>{assignment.name}</h2>
                            <p className="assignment-details">
                                <span>Deadline: {assignment.deadline}</span>
                                <span>Status: {assignment.status}</span>
                            </p>
                            <div className="progress-container">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${assignment.progress}%` }}
                                ></div>
                            </div>
                        </div>
                        <div className="assignment-actions">
                            {completedAssignments.includes(assignment.id) ? (
                                <button
                                    className="toggle-btn"
                                    onClick={() => handleToggleCompletion(assignment.id)}
                                >
                                    <FaTimesCircle /> Mark as Pending
                                </button>
                            ) : (
                                <button
                                    className="toggle-btn"
                                    onClick={() => handleToggleCompletion(assignment.id)}
                                >
                                    <FaCheckCircle /> Mark as Completed
                                </button>
                            )}
                            <button className="submit-btn" onClick={handleSubmit}>
                                <FaRegClock /> Submit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && <Modal message="Successfully Submitted!" onClose={handleCloseModal} />}
        </div>
    );
};

export default Assignments;
