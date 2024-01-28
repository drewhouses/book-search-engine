import { gql } from "@apollo/client";

export const LOGIN_USER = gql``;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: password!)
    addUser(username: $username, email: $email, password: $password) {
      # TODO Unsure what to put here, it needs to return Auth
    }
`;

export const SAVE_BOOK = gql``;

export const REMOVE_BOOK = gql``;
