import React, { useState } from 'react';
import { FaBuilding, FaUserTie, FaBriefcase, FaChartLine, FaCheck, FaTimes, FaHourglassHalf, FaClipboardList } from 'react-icons/fa';

function PlacementHistory() {
    // Example placement data with statuses and other information
    const [placements] = useState([
        { id: 1, company: 'Google', status: 'Selected', role: 'Software Engineer', date: '2024-12-01' },
        { id: 2, company: 'Microsoft', status: 'Rejected', role: 'Data Scientist', date: '2024-11-15' },
        { id: 3, company: 'Amazon', status: 'Processing', role: 'Cloud Architect', date: '2024-10-20' },
        { id: 4, company: 'Facebook', status: 'Offer Extended', role: 'Product Manager', date: '2024-12-05' },
        { id: 5, company: 'Tesla', status: 'Selected', role: 'AI Engineer', date: '2024-11-25' },
        { id: 6, company: 'IBM', status: 'Awaiting Interview', role: 'Full Stack Developer', date: '2024-11-30' },
        { id: 7, company: 'Apple', status: 'Rejected', role: 'UI/UX Designer', date: '2024-09-15' },
        { id: 8, company: 'Netflix', status: 'Processing', role: 'Backend Developer', date: '2024-12-10' },
    ]);

    // Function to assign a color based on the status
    const getStatusColor = (status) => {
        switch (status) {
            case 'Selected':
                return 'green';
            case 'Rejected':
                return 'red';
            case 'Processing':
                return 'orange';
            case 'Offer Extended':
                return 'blue';
            case 'Awaiting Interview':
                return 'purple';
            default:
                return 'gray';
        }
    };

    return (
        <div style={styles.container}>
            {/* Page Title and Summary */}
            <div style={styles.header}>
                <h1 style={styles.title}>
                    <FaChartLine style={{ marginRight: '10px' }} /> Student Placement History
                </h1>
                <p style={styles.summary}>
                    Track the journey of students as they apply and get placed in top companies.
                </p>
            </div>

            {/* Placement Summary Section */}
            <div style={styles.cardContainer}>
                <div style={styles.card}>
                    <FaBuilding style={styles.icon} />
                    <h3>Total Companies</h3>
                    <p>{placements.length}</p>
                </div>
                <div style={styles.card}>
                    <FaUserTie style={styles.icon} />
                    <h3>Top Company</h3>
                    <p>Google</p>
                </div>
                <div style={styles.card}>
                    <FaBriefcase style={styles.icon} />
                    <h3>Most Common Role</h3>
                    <p>Software Engineer</p>
                </div>
            </div>

            {/* Placement Table */}
            <table style={styles.table}>
                <thead>
                    <tr style={styles.tableHeader}>
                        <th style={styles.th}>ID</th>
                        <th style={styles.th}>Company</th>
                        <th style={styles.th}>Role</th>
                        <th style={styles.th}>Status</th>
                        <th style={styles.th}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {placements.map((placement) => (
                        <tr key={placement.id} style={styles.tableRow}>
                            <td style={styles.td}>{placement.id}</td>
                            <td style={styles.td}>{placement.company}</td>
                            <td style={styles.td}>{placement.role}</td>
                            <td style={{ ...styles.td, color: getStatusColor(placement.status) }}>
                                <span style={{ fontWeight: 'bold' }}>
                                    {placement.status}
                                </span>
                            </td>
                            <td style={styles.td}>{placement.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#1e1e1e', // Dark background for the page
        color: '#fff', // Light text color
        minHeight: '100vh',
    },
    header: {
        textAlign: 'center',
        marginBottom: '30px',
    },
    title: {
        fontSize: '28px',
        marginBottom: '10px',
        color: '#00bcd4', // Blue color for title
    },
    summary: {
        fontSize: '16px',
        color: '#ccc',
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '30px',
    },
    card: {
        backgroundColor: '#333', // Dark card background
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        width: '200px',
        transition: 'transform 0.2s',
        cursor: 'pointer',
        border: '1px solid #444', // Slight border for the cards
    },
    icon: {
        fontSize: '30px',
        color: '#00bcd4', // Blue color for icons
        marginBottom: '10px',
    },
    table: {
        width: '80%',
        margin: '0 auto',
        borderCollapse: 'collapse',
        backgroundColor: '#333', // Dark table background
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    tableHeader: {
        backgroundColor: '#00bcd4', // Blue header for the table
        color: '#fff',
    },
    th: {
        padding: '15px',
        fontSize: '16px',
    },
    tableRow: {
        transition: 'background-color 0.2s, transform 0.2s',
    },
    td: {
        padding: '15px',
        textAlign: 'center',
        fontSize: '14px',
        borderBottom: '1px solid #555', // Darker borders for the rows
    },
};

export default PlacementHistory;
