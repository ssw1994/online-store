import "./blog.css";
import React, { useReducer } from "react";
import { BlogList } from "./BlogList";
import { AddBlog } from "./AddBlog";
import { DispatchContext, StateContext } from "./context";
import reducer, { initialState } from "./Store/reducer";
export const BlogApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div>
          <BlogList />
          <AddBlog />
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default BlogApp;
