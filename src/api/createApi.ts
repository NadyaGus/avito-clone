import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Item = {
  name: string;
};

export const serverApi = createApi({
  reducerPath: 'serverApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getItems: builder.query<Item[], string>({
      query: () => `items`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetItemsQuery } = serverApi;
