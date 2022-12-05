import React from "react";

/**
 * @author
 * @function
 **/

export const CommentList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => {
        return <h3>{comment.description}</h3>;
      })}
    </div>
  );
};
