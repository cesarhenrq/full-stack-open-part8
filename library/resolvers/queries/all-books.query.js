const { Book } = require("../../schemas/");

const allBooks = async (root, args) => {
  const books = await Book.find({}).populate("author");

  if (args.author && args.genre) {
    return books.filter(
      ({ author, genres }) =>
        author.name === args.author && genres.includes(args.genre)
    );
  } else if (args.author) {
    return books.filter(({ author }) => author.name === args.author);
  } else if (args.genre) {
    return books.filter(({ genres }) => genres.includes(args.genre));
  }

  return books;
};

module.exports = allBooks;
