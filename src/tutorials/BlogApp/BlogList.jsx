import React, { useContext } from "react";
import { BlogItem } from "./BlogItem";
import { StateContext } from "./context";
/**
 * @author
 * @function BlogList
 **/

export const BlogList = () => {
  const { blogList } = useContext(StateContext); //[{title,description,statistics:{upvote,downvote}}]
  console.log(blogList);

  if (blogList?.length <= 0) {
    return <h1>No blogs available</h1>;
  }

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
