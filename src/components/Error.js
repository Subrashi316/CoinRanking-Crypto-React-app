import React from 'react';
import ErrorPng from '../assets/Error.png';

function Error({message}) {
    return (
        <div className="error">
            <img src={ErrorPng} className="error-icon" alt="red cross mark"  />
            <p className="error-text">{message}</p>
        </div>
    )
}

export default Error
