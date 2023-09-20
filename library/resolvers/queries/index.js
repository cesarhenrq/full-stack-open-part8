const bookCount = require("./book-count.query");
const authorCount = require("./author-count.query");
const allBooks = require("./all-books.query");
const allAuthors = require("./all-authors.query");
const me = require("./me.query");

module.exports = {
  bookCount,
  authorCount,
  allBooks,
  allAuthors,
  me,
};
