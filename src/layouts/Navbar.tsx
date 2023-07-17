/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { setUser } from "../redux/feature/user/userSlice";
import { auth } from "../lib/firebase";
import { useState } from "react";
import { useGetProductsQuery } from "../redux/feature/product/apiSlice";
import SearchResult from "../pages/SearchResult";
import { IProduct, Product } from "../types/globalTypes";
import { useGetBooksQuery } from '../redux/feature/filter/booksApi';
import { searchByTitle } from '../redux/feature/filter/filterSlice';



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
 

  const searchTitle = useAppSelector((state)=>state.filter.title)
  const {data:books,isLoading,error} = useGetBooksQuery({title:searchTitle})
  console.log(books)
  console.log(isLoading)
  console.log(error)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: not found</div>;
  }
  const handleSearchTitle = (e: { target: { value: string; }; }) => {
    dispatch(searchByTitle(e.target.value));
  };
 

 
  




  return (
    <div className="navbar bg-base-100">
          <div>
      <label>Genre:</label>
      <select>
        <option value="">All</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Sci-fi">Sci-fi</option>
        <option value="Mystery">Mystery</option>
      </select>
      <br />
      <label>Publication Year:</label>
      <select>
        <option value="">All</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
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
          <li>
            <Link to="/filter">Filter Book</Link>
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
                value=''
                onChange={handleSearchTitle}
                placeholder="Search books..."
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>

          <div>
          
  <ul>
  {books &&
        books?.data.map((book: IProduct) => (
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p>{book.author}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">{book.genre}</button>
              </div>
            </div>
          </div>
        ))}
  </ul>



           
          </div>

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



