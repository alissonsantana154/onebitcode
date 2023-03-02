const Comment = require("./Comment");

class Post {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.comments = [];
    this.createdAt = new Date();
  }
  addComment(usernane, content) {
    this.comments.push(new Comment(usernane, content));
  }
}

module.exports = Post;
