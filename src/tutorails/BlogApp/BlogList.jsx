import React from "react";
import { BlogItem } from "./BlogItem";
/**
 * @author
 * @function BlogList
 **/

export const BlogList = (props) => {
  const blogList = [];
  return (
    <div>
      {blogList.map((blog) => {
        return (
          <div key={blog.title}>
            <BlogItem blog={blog} />
          </div>
        );
      })}
    </div>
  );
};
