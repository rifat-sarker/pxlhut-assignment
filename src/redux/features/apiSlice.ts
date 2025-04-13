import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    submitFormData: builder.mutation<
      void,
      { username: string; password: string; confirmPassword: string }
    >({
      query: (data) => ({
        url: "posts",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSubmitFormDataMutation } = apiSlice;
