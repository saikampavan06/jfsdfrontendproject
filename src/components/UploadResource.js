import React, { useState } from 'react';
import './UploadResource.css';

function UploadResource() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        tags: '',
        publicationDate: '',
    });
    const [file, setFile] = useState(null);
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleCoverPhotoChange = (e) => {
        setCoverPhoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => data.append(key, formData[key]));
        if (file) data.append('file', file);
        if (coverPhoto) data.append('coverPhoto', coverPhoto);

        try {
            const response = await fetch('http://localhost:8080/api/upload', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                const responseData = await response.json();
                setMessage(responseData.message || 'Resource uploaded successfully!');
            } else {
                setMessage('Failed to upload resource. Please try again.');
            }
        } catch (error) {
            setMessage('Error uploading resource.');
        }
    };

    return (
        <div className="upload-form-container">
            <h2 className="form-header">Upload Resource</h2>
            <form onSubmit={handleSubmit} className="upload-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" name="category" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <input type="text" id="tags" name="tags" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="publicationDate">Publication Date</label>
                    <input type="date" id="publicationDate" name="publicationDate" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="file">Upload File</label>
                    <input type="file" id="file" name="file" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="coverPhoto">Upload Cover Photo</label>
                    <input type="file" id="coverPhoto" name="coverPhoto" onChange={handleCoverPhotoChange} />
                </div>
                <button type="submit" className="upload-btn">Submit</button>
            </form>
            {message && <p className="upload-message">{message}</p>}
        </div>
    );
}

export default UploadResource;
