const pubsub = require("../pubsub");

const bookAdded = {
  subscribe: () => pubsub.asyncIterator("BOOK_ADDED"),
};

module.exports = bookAdded;
