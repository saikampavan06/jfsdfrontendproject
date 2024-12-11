// src/components/Mail.js
import React, { useEffect } from 'react';

const Mail = () => {
  useEffect(() => {
    // Redirect to Gmail's compose page
    window.location.href = 'https://mail.google.com/mail/u/0/#inbox?compose=new';
  }, []);

  return <div>Redirecting to Gmail...</div>;
};

export default Mail;
