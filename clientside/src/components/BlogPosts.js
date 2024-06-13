import React from 'react';
import './BlogPostStyle.css';

const BlogPost = ({ title, date, content, imageUrl }) => (
  <div className="blog-post">
    <h1>{title}</h1>
    <p><strong>{date}</strong></p>
    <img src={imageUrl} alt={title} className="post-image" />
    <div className="post-content">
      {content}
    </div>
  </div>
);

export default BlogPost;
