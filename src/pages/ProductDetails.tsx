// import React from 'react'
// import ProductReview from './ProductReview'
// import { useDeleteProductMutation, useGetProductDetailsQuery } from '../redux/feature/product/apiSlice'
// import { useParams } from 'react-router-dom'
// import Navbar from '../layouts/Navbar'
// import Footer from '../layouts/Footer'
// import { useAppDispatch } from '../redux/hook'

// export default function ProductDetails() {
//     const {id} =useParams()
//     const {data:product,isLoading,error} = useGetProductDetailsQuery(id)

//   return (
//     <>
//     <Navbar />
//        <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
//         <div className="w-[50%]">
//           <p className="text-3xl font-semibold">{product?.title}</p>
//         </div>
//         <div className="w-[50%] space-y-3">
//           <h1 className="text-3xl font-semibold">Author Name:{product?.author}</h1>
//           <p className="text-xl">Genere: {product?.genre}</p>
//           <ul className="space-y-1 text-lg">
//            Published Date: {product?.published_date}
//           </ul>
//           <div className="card-actions justify-end">
//         <button className="btn">Delete Book</button>
//       </div>
//         </div>
//       </div>
//     <ProductReview />
//     <Footer />
//     </>
//   )
// }

import React, { useState } from "react";
import ProductReview from "./ProductReview";
import {
  useDeleteProductMutation,
  useGetProductDetailsQuery,
} from "../redux/feature/product/apiSlice";
import { Link, useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { useAppDispatch } from "../redux/hook";

export default function ProductDetails() {
  const [bookDeleted, setBookDeleted] = useState(false);
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useGetProductDetailsQuery(id);
  const [deleteProduct, { isLoading: isload, isError, isSuccess }] =
    useDeleteProductMutation();
  console.log(isload);
  console.log(isError);
  console.log(isSuccess);

  const handleDeleteProduct = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmed) {
      if (id) {
        deleteProduct(id);
      }
      setBookDeleted(true);
    }

    console.log(id);
  };

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          {/* <p className="text-3xl font-semibold">{product?.title}</p> */}
        </div>
        <div className="w-[50%] space-y-3">
          <p className="text-2xl font-semibold">Booke Name:{product?.title}</p>
          <h1 className="text-2xl font-semibold">
            Author Name: {product?.author}
          </h1>
          <p className="text-2xl">Genre: {product?.genre}</p>
          <ul className="space-y-1 text-2xl">
            Published Date: {product?.published_date}
          </ul>
          <div className="card-actions justify-center">
            <button className="btn">
              <Link to={`/updateproduct/${id}`}>Edit Book</Link>
            </button>
            {/* <button className="btn" onClick={handleDeleteProduct} >
             Delete Book
            </button> */}
            {bookDeleted ? (
              <p>Book has been deleted.</p>
            ) : (
              <button className="btn" onClick={handleDeleteProduct}>
                Delete Book
              </button>
            )}
          </div>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
