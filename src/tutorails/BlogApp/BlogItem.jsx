import React from "react";

/**
 * @author
 * @function BlogItem
 **/

export const BlogItem = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-header">{blog.title}</div>
      <div className="blog-description">{blog.description}</div>
      <div className="blog-actions">
        <button>upvote</button>
        <button>downvote</button>
        <button>comment</button>
      </div>
    </div>
  );
};
