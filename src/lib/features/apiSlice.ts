import { Post } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const publicApi = createApi({
  reducerPath: "publicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/nfts",
  }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => "list",
      transformResponse: (response:Post[]) => {
          return response.map((post, index) => ({
            name: post.name,
            index: index.toString(),
            image: `/image${Math.floor(Math.random() * (5)) + 1}.jpg`,
            bid: `${(Math.random() * (29999 - 0 + 1)).toFixed(2)}`,
            time: `${randomDate(new Date(), new Date(2026, 0, 30))}`
          }));
      },
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: "Posts", id })) : ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery } = publicApi;
