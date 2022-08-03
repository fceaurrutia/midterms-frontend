import { gql } from "graphql-request";

export const GET_USERS = gql`
  query getUsers {
    GetUsers {
      id
      name
      email
    }
  }
`;

export const GET_USER_ID = gql`
  query getUser($input: InputUserFind!) {
    GetUserByID(id: $input) {
      id
      name
      email
    }
  }
`;
