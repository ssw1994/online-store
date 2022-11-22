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
      upvote: 10,
      downvote: null,
    };
    this.comments = [
      new Comment(
        "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided",
        "esachin",
        this.blogId
      ),
    ];
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
