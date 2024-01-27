const jwt = require("jsonwebtoken");
import "dotenv/config";
const { GraphQLError } = require("graphql");
// set token secret and expiration date
const secret = process.env.JWT_SECRET;
const expiration = "2h";

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
