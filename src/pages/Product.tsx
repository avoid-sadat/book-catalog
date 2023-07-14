import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { IProduct } from "../types/globalTypes";
import { useGetProductsQuery } from "../redux/feature/product/apiSlice";
import ProductCart from "./ProductCart";

export default function Product() {
  const { data, isLoading, error } = useGetProductsQuery(undefined);
  console.log(error);
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {data?.data.map((product: IProduct) => (
          <ProductCart product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
}
