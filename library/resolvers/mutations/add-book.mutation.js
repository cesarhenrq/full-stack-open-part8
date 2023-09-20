const { Author, Book } = require("../../schemas");

const { GraphQLError } = require("graphql");

const pubsub = require("../pubsub");

const addBook = async (root, args, context) => {
  let author = await Author.findOne({ name: args.author });

  const user = context.currentUser;

  if (!user) {
    throw new GraphQLError("Not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
      },
    });
  }

  if (!author) {
    author = new Author({ name: args.author });

    try {
      await author.save();
    } catch (error) {
      throw new GraphQLError("Saving author failed", {
        extensions: {
          code: "BAD_USER_INPUT",
          invalidArgs: args.author,
          error,
        },
      });
    }
  }

  const book = new Book({ ...args, author: author._id });
  await book.populate("author");

  try {
    await book.save();
  } catch (error) {
    throw new GraphQLError("Saving book failed", {
      extensions: {
        code: "BAD_USER_INPUT",
        invalidArgs: error.errors.title.value,
        error,
      },
    });
  }

  pubsub.publish("BOOK_ADDED", { bookAdded: book });

  return book;
};

module.exports = addBook;
