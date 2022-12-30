import React from "react";
import { useContext } from "react";

import "./blog.css";
import { DispatchContext } from "./context";
import { Blog } from "./Store/util";
/**
 * @author
 * @function AddBlog
 **/

export const AddBlogForm = ({ onCancel }) => {
  //title,description
  const dispatch = useContext(DispatchContext);
  const [blog, updateBlog] = React.useState(new Blog());

  const title = (
    <div>
      <input
        placeholder="Title"
        value={blog.title}
        required
        onChange={(e) =>
          updateBlog((prev) => {
            return { ...prev, title: e.target.value };
          })
        }
      />
    </div>
  );

  const description = (
    <div>
      <textarea
        placeholder="Description"
        required
        cols={39}
        rows={8}
        value={blog.description}
        onChange={(e) =>
          updateBlog((prev) => {
            return { ...prev, description: e.target.value };
          })
        }
      />
    </div>
  );

  const saveBlog = (event) => {
    event && event.preventDefault();
    //dispatch
    dispatch({ type: "SAVE_BLOG", payload: blog });
    onCancel();
  };

  return (
    <div className="blog-form">
      <form onSubmit={saveBlog}>
        {title}
        {description}

        <div className="action-btns">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export const AddBlog = (props) => {
  const [isOpen, toggleDialog] = React.useState(false);

  if (isOpen) {
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <button onClick={() => toggleDialog(false)} className="close_btn">
            X
          </button>
          <AddBlogForm onCancel={() => toggleDialog(false)} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        className="fab-add-blog"
        onClick={() => toggleDialog((prev) => !prev)}
      >
        +
      </button>
    </div>
  );
};
