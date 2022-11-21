import React from "react";

/**
 * @author
 * @function BlogItem
 **/

export const BlogItem = ({ blog }) => {
  return (
    <div className="blog-card">
      <div>{blog.title}</div>
      <div>{blog.description}</div>
    </div>
  );
};
