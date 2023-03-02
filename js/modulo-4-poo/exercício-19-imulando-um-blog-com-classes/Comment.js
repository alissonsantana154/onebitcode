class Comment {
  constructor(usename, content) {
    this.username = usename;
    this.content = content;
    this.createdAt = new Date();
  }
}

module.exports = Comment;
