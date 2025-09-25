import React from 'react';
import './BlogTags.css';

const BlogTags = ({ tags, selectedTag, onTagClick }) => {
  return (
    <div className="tags-container">
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default BlogTags;