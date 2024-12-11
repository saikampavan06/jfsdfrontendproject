import React from "react";
import "./PlacementMaterials.css";

const PlacementMaterials = () => {
    // Hardcoded list of materials
    const materials = [
        {
            id: 1,
            title: "Resume Writing Guide",
            description: "A comprehensive guide to creating a professional resume.",

            downloadUrl: "https://www.sa.edu/wp-content/uploads/2019/09/resume-notes.pdf", // Link to the downloadable resource
        },
        {
            id: 2,
            title: "Interview Preparation Tips",
            description: "Tips and tricks to excel in job interviews.",

            downloadUrl: "https://www.goucher.edu/career-education-office/documents/Preparing-for-an-Interview.pdf", // Link to the downloadable resource
        },
        {
            id: 3,
            title: "Aptitude Test Practice",
            description: "Practice questions for aptitude tests commonly used in placements.",

            downloadUrl: "https://www.practiceaptitudetests.com/aptitude-test.pdf", // Link to the downloadable resource
        },
        {
            id: 4,
            title: "Group Discussion Tips",
            description: "How to prepare for and excel in group discussions during interviews.",

            downloadUrl: "https://www.sastra.edu/nptel/download/Prof%20GPRagini/pdf_New/Unit%2026.pdf",
        },
        {
            id: 5,
            title: "Technical Interview Preparation",
            description: "Prepare for technical rounds with commonly asked questions and solutions.",

            downloadUrl: "/downloads/technical-interview-prep.pdf",
        },
        {
            id: 6,
            title: "HR Interview Questions",
            description: "Learn the most common HR interview questions and how to answer them effectively.",

            downloadUrl: "https://www.mindtools.com/worksheets/50CommonInterviewQuestionsandAnswers.pdf",
        },
        {
            id: 7,
            title: "Coding Practice",
            description: "A collection of coding problems to sharpen your problem-solving skills.",

            downloadUrl: "https://bharathuniv.ac.in/downloads/avasoft.pdf",
        },
        {
            id: 8,
            title: "Time Management in Interviews",
            description: "Effective strategies to manage time during interviews and tests.",

            downloadUrl: "/downloads/time-management.pdf",
        },
        {
            id: 9,
            title: "Personality Development Tips",
            description: "Improve your personality and soft skills for better job prospects.",

            downloadUrl: "/downloads/personality-development.pdf",
        },
        {
            id: 10,
            title: "Mock Interview Series",
            description: "Mock interviews to help you prepare for real job interviews.",

            downloadUrl: "/downloads/mock-interview-series.pdf",
        },
        {
            id: 11,
            title: "Coding Interview Challenges",
            description: "Tackle advanced coding challenges for interview prep.",

            downloadUrl: "/downloads/coding-interview-challenges.pdf",
        },
        {
            id: 12,
            title: "Behavioral Interview Guide",
            description: "A guide to answering behavioral interview questions effectively.",

            downloadUrl: "/downloads/behavioral-interview-guide.pdf",
        },
        {
            id: 13,
            title: "Placement FAQs",
            description: "Frequently asked questions about the placement process and tips.",

            downloadUrl: "/downloads/placement-faqs.pdf",
        },
        {
            id: 14,
            title: "Industry Insights",
            description: "Get insights into the latest trends in the tech industry.",

            downloadUrl: "/downloads/industry-insights.pdf",
        },
    ];

    return (
        <div className="placement-materials-container">
            <h2>Placement Preparation Materials</h2>

            {materials.length === 0 ? (
                <p>No materials available at the moment. Please check back later.</p>
            ) : (
                <div className="material-grid">
                    {materials.map((material) => (
                        <div key={material.id} className="material-card">
                            {material.coverImage && (
                                <img
                                    src={material.coverImage}
                                    alt="Material Cover"
                                    className="material-cover"
                                />
                            )}
                            <h3>{material.title}</h3>
                            <p>{material.description}</p>
                            <div className="buttons-container">
                                <a
                                    href={material.downloadUrl}
                                    className="btn-download"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PlacementMaterials;