import React from 'react'
import ProductReview from './ProductReview'
import { useGetProductDetailsQuery } from '../redux/feature/product/apiSlice'
import { useParams } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

export default function ProductDetails() {
    const {id} =useParams()
    const {data:product,isLoading,error} = useGetProductDetailsQuery(id)
  return (
    <>
    <Navbar />
       <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <p className="text-3xl font-semibold">{product?.title}</p>
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">Author Name:{product?.author}</h1>
          <p className="text-xl">Genere: {product?.genre}</p>
          <ul className="space-y-1 text-lg">
           Published Date: {product?.published_date}
          </ul>
        </div>
      </div>
    <ProductReview />
    <Footer />
    </>
  )
}
