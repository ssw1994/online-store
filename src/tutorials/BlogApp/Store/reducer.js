import { Blog, Vote } from "./util";

export const initialState = {
  blogList: [],
};
export default function BlogReducer(state = [], action) {
  switch (action.type) {
    case "SAVE_BLOG": {
      return {
        ...state,
        blogList: [...state.blogList, action.payload],
      };
    }
    case "UPVOTE": {
      return {
        ...state,
        blogList: [
          ...state.blogList.map((blog) => {
            if (blog.blogId === action.payload.blogId) {
              return {
                ...blog,
                statistics: {
                  ...blog.statistics,
                  upvotes: [
                    ...blog.statistics.upvotes,
                    new Vote(action.userId),
                  ],
                },
              };
            }
            return { ...blog };
          }),
        ],
      };
    }
    case "DOWNVOTE": {
      return {
        ...state,
        blogList: [
          ...state.blogList.map((blog) => {
            if (blog.blogId === action.payload.blogId) {
              return {
                ...blog,
                statistics: {
                  ...blog.statistics,
                  downvotes: [
                    ...blog.statistics.downvotes,
                    new Vote(action.userId),
                  ],
                },
              };
            }
            return { ...blog };
          }),
        ],
      };
    }
    case "COMMENT": {
      return {
        ...state,
        blogList: [
          ...state.blogList.map((blog) => {
            if (blog.blogId === action.payload.blogId) {
              return {
                ...blog,
                comments: [...blog.comments, action.payload],
              };
            }
            return { ...blog };
          }),
        ],
      };
    }
    default:
      return { ...state };
  }
}
