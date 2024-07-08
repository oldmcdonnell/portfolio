import React from 'react';
import Vid from './vid2.mp4'; // Ensure this path is correct

function VidBlog() {
    return (
        <div className="video-container">
            <video width="100%" controls>
                <source src={Vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VidBlog;
