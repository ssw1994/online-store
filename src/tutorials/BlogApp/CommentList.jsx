import React from "react";

export const CommentItem = ({
  description,
  username,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="comment-item-card">
      <div className="comment-description">{description}</div>
      <div className="comment-details">
        <div>
          <label>Comment By : </label>
          <span>{username}</span>
        </div>
        <div>
          <label>Created At : </label>
          <span>{new Date(createdAt).toDateString()}</span>
        </div>
        <div>
          <label>Updated At:</label>
          <span>{new Date(updatedAt).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

/**
 * @author
 * @function
 **/

export const CommentList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => {
        return <CommentItem {...comment} />;
      })}
    </div>
  );
};
