import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CertificationCourses() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
    const [showReceipt, setShowReceipt] = useState(false);
    const [receiptImage, setReceiptImage] = useState(null);

    // Example random payment receipt images
    const receiptImages = [
        "https://www.qbservices.net/wp-content/uploads/2020/10/sample-invoice.jpg",
        "https://www.smartsheet.com/sites/default/files/ic-payment-receipt-template.png",
        "https://www.receipts-templates.com/files/receipt-templates/payment-receipt-template.png",
        "https://www.template.net/wp-content/uploads/2018/05/payment-receipt-2.png"
    ];

    const certifications = [
        {
            name: "AWS Certified Solutions Architect",
            description: "Learn to design and deploy scalable systems on Amazon Web Services.",
            link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
            logo: "https://i0.wp.com/amach.com/wp-content/uploads/2023/10/aww-logo-blue-background.png?resize=1024%2C1024&ssl=1g"
        },
        {
            name: "Google Professional Cloud Architect",
            description: "Master the skills to design and implement solutions on Google Cloud.",
            link: "https://cloud.google.com/certification/cloud-architect",
            logo: "https://images.credly.com/images/44994cda-b5b0-44cb-9a6d-d29b57163073/image.png"
        },
        {
            name: "Microsoft Azure Solutions Architect Expert",
            description: "Become proficient in deploying and managing solutions on Azure.",
            link: "https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/",
            logo: "https://markpatton.cloud/wp-content/uploads/2020/02/azure-solutions-architect-expert-600x600-1.png"
        },
        {
            name: "Certified Kubernetes Administrator (CKA)",
            description: "Validate your skills in managing Kubernetes clusters and deployments.",
            link: "https://www.cncf.io/certification/cka/",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDbufcpfxiGjBZDEIEP-NlXz9O24wKly7-jTYHVZtdwZthtpHQymLEtr5FiWb8Eq1E6A&usqp=CAU"
        }
    ];

    const handleApply = (cert) => {
        setSelectedCert(cert);
        setIsModalOpen(true);
        setShowReceipt(false);
    };

    const handleDonePayment = () => {
        // Randomly select a receipt image
        const randomImage = receiptImages[Math.floor(Math.random() * receiptImages.length)];
        setReceiptImage(randomImage);
        setShowReceipt(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setShowReceipt(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Global Certifications</h1>
            <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px' }}>
                Enhance your skills and advance your career with these globally recognized certifications.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            width: '300px',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
                            textAlign: 'center',
                            padding: '15px',
                            backgroundColor: '#fff'
                        }}
                    >
                        <img
                            src={cert.logo}
                            alt={`${cert.name} Logo`}
                            style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                        />
                        <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{cert.name}</h2>
                        <p style={{ fontSize: '14px', margin: '10px 0', color: '#555' }}>{cert.description}</p>
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                margin: '10px 5px',
                                padding: '8px 15px',
                                backgroundColor: '#007BFF',
                                color: '#fff',
                                borderRadius: '5px',
                                textDecoration: 'none',
                                fontWeight: 'bold'
                            }}
                        >
                            Learn More
                        </a>
                        <button
                            style={{
                                display: 'inline-block',
                                margin: '10px 5px',
                                padding: '8px 15px',
                                backgroundColor: '#28a745',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                            onClick={() => handleApply(cert)}
                        >
                            Apply
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal Section */}
            {isModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: '1000'
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            textAlign: 'center',
                            width: '400px'
                        }}
                    >
                        <h2 style={{ marginBottom: '15px' }}>Payment for {selectedCert?.name}</h2>
                        {!showReceipt ? (
                            <>
                                <img
                                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6wHRjT4Liiuh0CQkOdR2WFU9xFyeQA0TJZ-bQIqwiv6Ib-Slk7fqKDlvRqcXdLBvG-o&usqp=CAU"}
                                    alt="Certification"
                                    style={{ width: '150px', height: 'auto', marginBottom: '20px' }}
                                />
                                <button
                                    onClick={handleDonePayment}
                                    style={{
                                        padding: '10px 15px',
                                        backgroundColor: '#28a745',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Done Payment
                                </button>
                            </>
                        ) : (
                            <>
                                <img
                                    src={"https://wallstreetmojocms.recurpro.in/uploads/Cash_Receipt_Template_f0ef399d6b.webp"}
                                    alt="Payment Receipt"
                                    style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
                                />
                                <button
                                    onClick={handleCloseModal}
                                    style={{
                                        padding: '10px 15px',
                                        backgroundColor: '#dc3545',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Close
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CertificationCourses;
