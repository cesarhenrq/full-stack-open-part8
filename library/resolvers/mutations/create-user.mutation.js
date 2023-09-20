const { User } = require("../../schemas");

const { GraphQLError } = require("graphql");

const createUser = async (root, args) => {
  const user = new User({ ...args });

  try {
    await user.save();
  } catch (error) {
    throw new GraphQLError("Saving user failed", {
      extensions: {
        code: "BAD_USER_INPUT",
        invalidArgs: error.errors.name.value,
        error,
      },
    });
  }

  return user;
};

module.exports = createUser;
