const { dotenv } = require("../utils/configs/");

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const { MONGODB_URI } = dotenv;

const initialize = () => {
  console.log("connecting to", MONGODB_URI);

  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("connected to MongoDB");
    })
    .catch((error) => {
      console.log("error connection to MongoDB:", error.message);

      process.exit(1);
    });
};

module.exports = initialize;
