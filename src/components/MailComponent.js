// src/components/MailComponent.js
import React, { useState } from 'react';

const MailComponent = () => {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSendEmail = (e) => {
        e.preventDefault();
        // Here you would typically send the email using an API
        console.log('Sending email...');
        console.log(`Recipient: ${recipient}`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);

        // Reset the form after sending email
        setRecipient('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="mail-container">
            <h2>Compose Mail</h2>
            <form onSubmit={handleSendEmail} className="mail-form">
                <div className="form-group">
                    <label>Recipient Email:</label>
                    <input
                        type="email"
                        placeholder="Enter recipient email"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Subject:</label>
                    <input
                        type="text"
                        placeholder="Enter subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea
                        placeholder="Write your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="send-btn">Send Email</button>
            </form>
        </div>
    );
};

export default MailComponent;
