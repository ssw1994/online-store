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
        <button
          data-count={blog.statistics.upvote}
          className="upvotes action-count"
        >
          upvote
        </button>
        <button
          className="downvote action-count"
          data-count={blog.statistics?.downvote ?? 0}
        >
          downvote
        </button>
        <button className="comments">comment</button>
      </div>
    </div>
  );
};
