const { Author } = require("../../schemas/");

const authorCount = async () => Author.collection.countDocuments();

module.exports = authorCount;
