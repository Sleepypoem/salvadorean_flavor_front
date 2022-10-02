import React from 'react';

function LoadingScreen() {
    return (
        <div className=" mx-auto my-auto d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border " role="status" aria-hidden="true"></div>
        </div>
    );
}

export default LoadingScreen;