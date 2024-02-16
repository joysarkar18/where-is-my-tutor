'use client'

import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const onChange = e => {
        console.log(e.target.files[0])
        setFile(e.target.files[0]);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', "file");

        try {
            console.log(file)
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res)
            setMessage(res.data.message);
        } catch (err) {
            console.log(err)
            setMessage(err.message);
        }
    };

    return (
        <div>
            <h3>File Upload</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="file" className="form-control" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">
                    Upload
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default FileUpload;
