export class Blog {
  blogId;
  title;
  description;
  statistics;
  comments;
  constructor(title, description) {
    this.blogId = `BLOG_ID_${Date.now()}`;
    this.title = title;
    this.description = description;
    this.statistics = {
      upvote: null,
      downvote: null,
    };
    this.comments = [];
  }
}

export class Comment {
  commentId;
  description;
  username;
  comments;
  blogId;
  constructor(description, username, blogId) {
    this.commentId = `COMMENT_ID_${Date.now()}`;
    this.description = description;
    this.username = username;
    this.blogId = blogId;
    this.comments = [];
  }
}
