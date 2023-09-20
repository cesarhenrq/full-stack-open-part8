const { Author } = require("../../schemas");

const { GraphQLError } = require("graphql");

const editAuthor = async (root, args, context) => {
  const author = await Author.findOne({ name: args.name });

  const user = context.currentUser;

  if (!user) {
    throw new GraphQLError("Not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
      },
    });
  }

  if (!author) {
    throw new GraphQLError("Author not found", {
      extensions: {
        code: "BAD_USER_INPUT",
        invalidArgs: args.name,
      },
    });
  }

  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      author._id,
      { born: args.setBornTo },
      { new: true }
    );

    return updatedAuthor;
  } catch (error) {
    throw new GraphQLError("Updating author failed", {
      extensions: {
        code: "BAD_USER_INPUT",
        invalidArgs: error.errors.name.value,
        error,
      },
    });
  }
};

module.exports = editAuthor;
