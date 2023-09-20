const { GraphQLError } = require("graphql");

const jwt = require("jsonwebtoken");

const { User } = require("../../schemas/");

const { dotenv } = require("../configs/");

const { JWT_SECRET } = dotenv;

const getUserByContext = async ({ req, res }) => {
  const auth = req ? req.headers.authorization : null;
  if (auth && auth.startsWith("Bearer ")) {
    try {
      const decodedToken = jwt.verify(auth.substring(7), JWT_SECRET);
      const currentUser = await User.findById(decodedToken.id);
      return { currentUser };
    } catch (error) {
      throw new GraphQLError("Not authenticated", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      });
    }
  }
};

module.exports = getUserByContext;
