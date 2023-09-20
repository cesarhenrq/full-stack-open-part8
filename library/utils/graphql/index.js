const typeDefs = require("./type-defs.js");
const resolvers = require("../../resolvers/");
const getUserByContext = require("./get-user-by-context.js");

module.exports = {
  typeDefs,
  resolvers,
  getUserByContext,
};
