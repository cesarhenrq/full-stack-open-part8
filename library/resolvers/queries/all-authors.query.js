const { Author, Book } = require("../../schemas/");

const allAuthors = async () => {
  const authors = await Author.find({});

  const books = await Book.find({});

  return authors.map((author) => ({
    ...author._doc,
    bookCount: books.filter(
      (book) => book.author.toString() === author._id.toString()
    ).length,
  }));
};

module.exports = allAuthors;
