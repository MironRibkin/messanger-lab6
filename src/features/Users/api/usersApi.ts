import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../types/users";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (build) => ({
    getUsers: build.query<{ username: string }[], void>({
      query() {
        return {
          url: "/users",
        };
      },
    }),

    loginUser: build.mutation<void, IUser>({
      query(data) {
        return {
          url: "/users/login",
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetUsersQuery, useLoginUserMutation, useLazyGetUsersQuery } =
  usersApi;
