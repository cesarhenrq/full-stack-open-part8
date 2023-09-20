const { Author } = require("../../schemas/");

const allAuthors = async () => Author.find({});

module.exports = allAuthors;
