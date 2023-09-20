const { Book } = require("../../schemas");

const bookCount = async () => Book.collection.countDocuments();

module.exports = bookCount;
