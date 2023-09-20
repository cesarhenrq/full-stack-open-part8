const { Book } = require("../../schemas/");

const bookCount = async (root) => {
  const books = await Book.find({ author: root._id });
  return books.length;
};

module.exports = bookCount;
