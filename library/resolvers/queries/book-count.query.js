const { Book } = require("../../schemas");

const bookCount = async () => {
  return Book.collection.countDocuments();
};

module.exports = bookCount;
