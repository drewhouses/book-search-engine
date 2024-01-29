// TODO
const typeDefs = `
  type Query {
    me: User
  }

  type Mutation {
    login(email: email!, password: password!): Auth
    addUser(username: username!, email: email!, password: password!): Auth
    saveBook(book: bookInfoInput): User
    removeBook(bookId: bookID!): User
  }

  input bookInfoInput {
    authors: [authors]
    description: description
    title: title!
    bookId: bookID!
    image: image
    link: link
  }

  type User: {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book: {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth: {
    token: String
    user: User
  }

`;

module.exports = typeDefs;
