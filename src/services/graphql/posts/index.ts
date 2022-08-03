import { useQuery } from "react-query";
import { graphqlClient } from "../../../lib";

import { GET_POSTS } from "./queries";

export type PostResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const GetPosts = (title: string | null) => {
  return useQuery<PostResponse[]>(
    ["getUsers", title],
    async () => {
      try {
        const client = await graphqlClient();

        const data = await client.request(GET_POSTS, { input: { title } });

        return data.GetPosts;
      } catch (err) {
        console.error(err);
      }
    },
    { enabled: false }
  );
};
