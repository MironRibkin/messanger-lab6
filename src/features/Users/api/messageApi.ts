import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IMessage {
  id: string;
  sender: string;
  receiver: string;
  title: string;
  body: string;
  date: string;
}

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  tagTypes: ["Message"],
  endpoints: (build) => ({
    getMessages: build.query<IMessage[], string>({
      query(username) {
        return {
          url: `/messages?username=${username}`,
        };
      },
      providesTags: ["Message"],
    }),
    sendMessage: build.mutation<void, Omit<IMessage, "id" | "date">>({
      query(data) {
        return {
          url: "/messages/send",
          method: "post",
          body: data,
        };
      },
      invalidatesTags: ["Message"],
    }),
  }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = messageApi;
