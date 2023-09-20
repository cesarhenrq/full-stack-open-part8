const Query = require("./queries/");

const Author = require("./author/");

const Mutation = require("./mutations/");

const Subscription = require("./subscriptions/");

const resolvers = {
  Query,
  Author,
  Mutation,
  Subscription,
};

module.exports = resolvers;
