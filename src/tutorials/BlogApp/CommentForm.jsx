import React from "react";
import { useContext } from "react";
import { DispatchContext } from "./context";
import { Comment } from "./Store/util";

/**
 * @author
 * @function CommentForm
 **/

export const CommentForm = ({ blogId, cancel }) => {
  const [commentForm, updateForm] = React.useState(
    new Comment("", "Sagar", blogId)
  );
  const dispatch = useContext(DispatchContext);
  const doComment = (event) => {
    event.preventDefault();
    dispatch({ type: "COMMENT", payload: commentForm });
    cancel();
  };

  const updateComment = (event) => {
    updateForm((prev) => {
      return {
        ...prev,
        description: event.target.value,
      };
    });
  };

  return (
    <div className="comment-form">
      <form onSubmit={doComment}>
        <textarea
          placeholder="Enter comment here...."
          value={commentForm.description}
          onChange={updateComment}
        ></textarea>
        <div className="action-btns">
          <button onClick={cancel}>Cancel</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
