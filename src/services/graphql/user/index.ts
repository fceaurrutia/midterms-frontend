import { useMutation, useQuery } from "react-query";
import { graphqlClient } from "../../../lib";

import { CREATE_USER } from "./mutations";
import { GET_USERS, GET_USER_ID } from "./queries";

export type UserResponse = {
  id: string;
  name: string;
  email: string;
};

export type UserInput = {
  name: string;
  email: string;
};

export const CreateUser = () => {
  return useMutation<UserResponse | string, Error, UserInput>(
    "createUser",
    async ({ name, email }) => {
      try {
        const client = await graphqlClient();

        const data: any = await client.request(CREATE_USER, {
          input: { name, email },
        });

        return data;
      } catch (err) {
        return undefined;
      }
    }
  );
};

export const GetUserList = () => {
  return useQuery<UserResponse[]>(
    ["getUsers"],
    async () => {
      try {
        const client = await graphqlClient();

        const data = await client.request(GET_USERS);

        return data.GetUsers;
      } catch (err) {
        console.error(err);
      }
    },
    { refetchInterval: 60000 }
  );
};

export const GetUserByID = (id: string) => {
  return useQuery<UserResponse>(
    ["getUser", id],
    async () => {
      try {
        const client = await graphqlClient();

        const data = await client.request(GET_USER_ID, { input: { id } });

        return data.GetUserByID;
      } catch (err) {
        console.error(err);
      }
    },
    { refetchInterval: 60000 }
  );
};
