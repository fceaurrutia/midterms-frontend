import { gql } from "graphql-request";

export const CREATE_USER = gql`
  mutation createUser($newUserData: InputUser!) {
    CreateUser(newUserData: $newUserData) {
      id
      name
      email
    }
  }
`;
