import { gql } from "@apollo/client";
//TODO
export const LOGIN_USER = gql`
  mutation login($email: email, $password: password!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: password!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookInput: bookInfoInput!) {
    saveBook(bookInfoInput: $bookInput) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
      }
    }
  }
`;

//TODO
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: bookId!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
      }
    }
  }
`;
