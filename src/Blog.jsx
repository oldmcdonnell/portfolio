import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Week6 from './blog/Week6';
import Week7 from './blog/Week7';
import Week8 from './blog/Week8';
import Week9 from './blog/week9';

function Blog() {
    const [expandedPost, setExpandedPost] = useState(null);

    const toggleExpand = (post) => {
        setExpandedPost(expandedPost === post ? null : post);
    };

    return (
        <Container id="page-content">
            <div>
                <div className="my-4 text-center">
                    <h2>Blog</h2>
                </div>

                <div>
                    <h4
                        onClick={() => toggleExpand('Week6')}
                        className="blog-header"
                    >
                        Week 6 {expandedPost === 'Week6' ? '-' : '+'}
                    </h4>
                    {expandedPost === 'Week6' ? (
                        <Week6 />
                    ) : (
                        <p className="blog-preview">
                            Preview of Week 6... [Replace with actual preview text]
                        </p>
                    )}

                    <h4
                        onClick={() => toggleExpand('Week7')}
                        className="blog-header"
                    >
                        Week 7 {expandedPost === 'Week7' ? '-' : '+'}
                    </h4>
                    {expandedPost === 'Week7' ? (
                        <Week7 />
                    ) : (
                        <p className="blog-preview">
                            Preview of Week 7... [Replace with actual preview text]
                        </p>
                    )}

                    <h4
                        onClick={() => toggleExpand('Week8')}
                        className="blog-header"
                    >
                        Week 8 {expandedPost === 'Week8' ? '-' : '+'}
                    </h4>
                    {expandedPost === 'Week8' ? (
                        <Week8 />
                    ) : (
                        <p className="blog-preview">
                            Preview of Week 8... [Replace with actual preview text]
                        </p>
                    )}

                    <h4
                        onClick={() => toggleExpand('Week9')}
                        className="blog-header"
                    >
                        Week 9 {expandedPost === 'Week9' ? '-' : '+'}
                    </h4>
                    {expandedPost === 'Week9' ? (
                        <Week9 />
                    ) : (
                        <p className="blog-preview">
                            Preview of Week 9... [Replace with actual preview text]
                        </p>
                    )}
                </div>
            </div>
        </Container>
    );
}

export default Blog;
