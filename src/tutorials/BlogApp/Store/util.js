export class Vote {
  userId;
  createdAt;
  updatedAt;

  constructor(userId) {
    this.userId = userId;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }
}
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
      upvotes: [],
      downvotes: [],
    };
    this.comments = [];
  }

  findName() {}
}

export class Comment {
  commentId;
  description;
  username;
  comments;
  blogId;
  createdAt;
  updatedAt;
  constructor(description = "", username = "", blogId = "") {
    this.commentId = `COMMENT_ID_${Date.now()}`;
    this.description = description;
    this.username = username;
    this.blogId = blogId;
    this.comments = [];
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }
}
