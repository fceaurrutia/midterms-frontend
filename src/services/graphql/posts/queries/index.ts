import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query GetPosts($input: FilterInputPost!) {
    GetPosts(input: $input) {
      userId
      id
      title
      body
    }
  }
`;
