/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({genre,published_date,title,author}) => `/product?genre=${genre}&published_date=${published_date}&title=${title}&author=${author}`,
      
    }),
  }),
});

export const {useGetBooksQuery} = booksApi

// type Book = {
//   // Define the properties of a Book object
//   id: string;
//   title: string;
//   author: string;
//   // Add more properties as necessary
// };
