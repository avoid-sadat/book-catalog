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
    deleteProduct:builder.mutation({
      query:(id)=>({
        url:`/product/${id}`,
        method:'DELETE'
      })
    }),
    updateProduct:builder.mutation({
      query:({id,data})=>({
        url:`/product/${id}`,
        method:'PATCH',
        body:data
      })
    }),
  })
})

export const {useGetProductsQuery,useGetProductDetailsQuery,useAddProductMutation,useDeleteProductMutation,useUpdateProductMutation} = api