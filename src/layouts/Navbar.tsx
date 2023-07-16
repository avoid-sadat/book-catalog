import React from 'react'

import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { setUser } from "../redux/feature/user/userSlice";
import { auth } from "../lib/firebase";
import { useState } from "react";
import { useGetProductsQuery } from "../redux/feature/product/apiSlice";
import SearchResult from "../pages/SearchResult";
import { Product } from "../types/globalTypes";



export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    console.log("Logout");
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  //search book
  const { data: products = {}, isLoading, error } = useGetProductsQuery(undefined);
  console.log('Products:', products);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const productArray = products.data || []; // Extract the array of products

    const filteredProducts = productArray.filter((product: Product) => {
      const lowerCaseTitle = product.title.toLowerCase();
      const lowerCaseAuthor = product.author.toLowerCase();
      const lowerCaseGenre = product.genre.toLowerCase();

      return (
        lowerCaseTitle.includes(query) ||
        lowerCaseAuthor.includes(query) ||
        lowerCaseGenre.includes(query)
      );
    });

    setSearchResults(filteredProducts);
  };


  function getErrorDisplayMessage(
    error:
      | import("@reduxjs/toolkit/query").FetchBaseQueryError
      | import("@reduxjs/toolkit").SerializedError
  ): React.ReactNode {
    return "An error occurred"; // You can customize the error message based on your requirements
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Book Shop</a>
      </div>
      <div>
        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">All Book</Link>
          </li>
          <li>
            <Link to="/addproduct">Add Book</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="navbar bg-base-100">
          {/* ...existing code... */}
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search books..."
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>

          <div>
          {products.length > 0 ? (
  <ul>
    {searchResults.map((product, index) => (
      <SearchResult key={index} product={product} />
    ))}
  </ul>
) : null}


            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {getErrorDisplayMessage(error)}</p>}
          </div>

          {/* ...existing code... */}
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            {!user.email && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/signup"}>SignUP</Link>
                </li>
              </>
            )}
            {user.email && (
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}



