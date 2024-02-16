'use client'

import React, { useState } from 'react';
import { uploadURL } from '../constants/urls';

const Form = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`${uploadURL}`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                console.log('File uploaded successfully');
            } else {
                console.error('Failed to upload file');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="file">File:</label>
                <input type="file" id="file" onChange={handleFileChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
