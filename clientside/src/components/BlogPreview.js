import React from 'react';
import './BlogPostStyle.css';

const BlogPreview = ({ post, onClick }) => (
  <div className="blog-preview" onClick={onClick}>
    <h2>{post.title}</h2>
    <p><strong>{post.date}</strong></p>
    <img src={post.imageUrl} alt={post.title} className="preview-image" />
    <p>{post.previewContent}</p>
  </div>
);

export default BlogPreview;
