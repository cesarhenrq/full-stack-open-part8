const { User } = require("../../schemas");

const jwt = require("jsonwebtoken");

const { GraphQLError } = require("graphql");

const {
  dotenv: { JWT_SECRET },
} = require("../../utils/configs/");

const login = async (root, args) => {
  const user = await User.findOne({ username: args.username });

  if (!user || args.password !== "secret") {
    throw new GraphQLError("Wrong credentials", {
      extensions: {
        code: "UNAUTHENTICATED",
      },
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  return { value: jwt.sign(userForToken, JWT_SECRET) };
};

module.exports = login;
