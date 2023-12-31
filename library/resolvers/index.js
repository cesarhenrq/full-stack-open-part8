const Query = require("./queries/");

const Mutation = require("./mutations/");

const Subscription = require("./subscriptions/");

const resolvers = {
  Query,
  Mutation,
  Subscription,
};

module.exports = resolvers;
