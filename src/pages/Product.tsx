/* eslint-disable @typescript-eslint/no-unused-vars */
import { IProduct } from "../types/globalTypes";
import { useGetProductsQuery } from "../redux/feature/product/apiSlice";
import ProductCart from "./ProductCart";

export default function Product() {
  const { data, isLoading, error } = useGetProductsQuery(undefined,{
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  console.log(error);
  console.log(data);
  console.log(isLoading);
  return (
    <>
     
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {data?.data.map((product: IProduct) => (
          <ProductCart product={product} />
        ))}
      </div>
      
    </>
  );
}
