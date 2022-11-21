const Comment = {
  commentId: "",
  username: "",
  description: "",
  comments: [],
};
const Blog = {
  blogId: "",
  title: "",
  description: "",
  statistics: {
    upvote: null,
    downvote: null,
  },
  comments: [],
};

export const initialState = {
  blogList: [],
};
export default function BlogReducer(state = [], action) {}
