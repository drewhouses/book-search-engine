const { Profile, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    // user: async() => {
    //   return.User.find();
    // }
  },

  Mutation: {
    // createUser: async (parent, {} => {
    //   const user = await User.create();
    // })
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    // saveBook: async (parent, {}) => {};
  },
};

module.exports = resolvers;
