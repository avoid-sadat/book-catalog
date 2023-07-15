import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath:'api',
  baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
  endpoints:(builder)=>({
    getProducts:builder.query({
      query:()=>'/products'
    }),
    getProductDetails:builder.query({
      query:(id)=>`/product/${id}`
    }),
    addProduct:builder.mutation({
      query:(data)=>({
        url:'/product',
        method:'POST',
        body:data
      })
    }),
  })
})

export const {useGetProductsQuery,useGetProductDetailsQuery,useAddProductMutation} = api