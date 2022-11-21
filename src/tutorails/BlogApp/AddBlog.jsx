import React from "react";

import "./blog.css";
import { Blog } from "./Store/util";
/**
 * @author
 * @function AddBlog
 **/

export const AddBlogForm = () => {
  //title,description

  const [blog, updateBlog] = React.useState(new Blog());

  const title = (
    <div>
      <input
        placeholder="Title"
        value={blog.title}
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
      <input
        placeholder="Description"
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
  };

  return (
    <div>
      <form onSubmit={saveBlog}>
        {title}
        {description}

        <div className="action-btns">
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export const AddBlog = (props) => {
  return (
    <div>
      <button className="fab-add-blog">+</button>
    </div>
  );
};
