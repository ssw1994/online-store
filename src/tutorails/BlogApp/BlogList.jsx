import React, { useContext } from "react";
import { BlogItem } from "./BlogItem";
import { StateContext } from "./context";
/**
 * @author
 * @function BlogList
 **/

export const BlogList = (props) => {
  const { blogList } = useContext(StateContext);
  console.log(blogList);
  return (
    <div className="blog-list">
      {blogList.map((blog) => {
        return (
          <div key={blog.title} className="blog-item">
            <BlogItem blog={blog} />
          </div>
        );
      })}
    </div>
  );
};
