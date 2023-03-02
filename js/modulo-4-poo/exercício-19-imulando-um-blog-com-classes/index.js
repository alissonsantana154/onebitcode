const Author = require("./Author");

const john = new Author("john Doe");

const post = john.writePost("Título do post", "Lorem ipsum dolor sic...");

post.addComment("Alisson Santana", "Muito bom!");
post.addComment("Lucas", "Achei interressante.");

console.log(john);
console.log(post);
