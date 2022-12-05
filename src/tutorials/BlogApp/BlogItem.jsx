import React, { useContext } from "react";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import { DispatchContext } from "./context";

/**
 * @author
 * @function BlogItem
 **/

export const BlogItem = ({ blog }) => {
  const dispatch = useContext(DispatchContext);
  const upvote = () => {
    dispatch({ type: "UPVOTE", payload: blog, userId: "Sagar" });
  };

  const downvote = () => {
    dispatch({ type: "DOWNVOTE", payload: blog, userId: "Sagar" });
  };

  const [isAddComment, toggleComment] = React.useState(false);
  const [showComments, toggleShowComment] = React.useState(false);

  return (
    <div className="blog-card">
      <div className="blog-header">{blog.title}</div>
      <div className="blog-description">{blog.description}</div>
      <div className="blog-actions">
        <button onClick={() => toggleShowComment((prev) => !prev)}>
          {showComments ? "Hide comments" : "Show comments"}{" "}
        </button>
        <button className="upvotes" onClick={upvote}>
          upvote<sup>{blog.statistics?.upvotes?.length ?? 0}</sup>
        </button>
        <button className="downvote" onClick={downvote}>
          downvote<sup>{blog.statistics?.downvotes?.length ?? 0}</sup>
        </button>
        {!isAddComment && (
          <button className="comments" onClick={() => toggleComment(true)}>
            comment
          </button>
        )}
      </div>
      {isAddComment && (
        <CommentForm blogId={blog.blogId} cancel={() => toggleComment(false)} />
      )}

      {showComments && <CommentList comments={blog.comments} />}
    </div>
  );
};
