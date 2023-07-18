/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { HTMLAttributes } from "react";

// import { Link } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../redux/hook";
// import { signOut } from "firebase/auth";
// import { setUser } from "../redux/feature/user/userSlice";
// import { auth } from "../lib/firebase";
// import { useState } from "react";
// import { useGetProductsQuery } from "../redux/feature/product/apiSlice";
// import SearchResult from "../pages/SearchResult";
// import { IProduct, Product } from "../types/globalTypes";
// import { useGetBooksQuery } from "../redux/feature/filter/booksApi";
// import {
//   searchByAuthor,
//   searchByTitle,
//   setGenreFilter,
//   setYearFilter,
// } from "../redux/feature/filter/filterSlice";

// export default function Navbar() {
//   const { user } = useAppSelector((state) => state.user);
//   const dispatch = useAppDispatch();
//   const handleLogout = () => {
//     console.log("Logout");
//     signOut(auth).then(() => {
//       dispatch(setUser(null));
//     });
//   };

//   //search book

//   const searchTitle = useAppSelector((state) => state.filter.title);
//   const searchByAuthors = useAppSelector((state) => state.filter.author);
//   const searchGenre = useAppSelector((state) => state.filter.genre);
//   const {
//     data: books,
//     isLoading,
//     error,
//   } = useGetBooksQuery({
//     title: searchTitle,
//     author: searchByAuthors,
//     genre: searchGenre,
//   });

//   const handleSearch = (e: { target: { value: string } }) => {
//     const query = e.target.value;
//     dispatch(searchByAuthor(query));
//     dispatch(searchByTitle(query));
//     dispatch(setGenreFilter(query));
//   };
//   console.log(books);
//   console.log(isLoading);
//   console.log(error);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error occurred: not found</div>;
//   }

//   //filter
//   const { data: product, isLoading:islo, isError } = useGetProductsQuery(undefined);
//   console.log(islo);
//   console.log(isError);

//   const handleGenreChange = (e: { target: { value: string } }) => {
//     dispatch(setGenreFilter(e.target.value));
//   };

//   const handleYearChange = (e: { target: { value: string } }) => {
//     dispatch(setYearFilter(e.target.value));
//   };

//   return (
//     <div className="navbar bg-base-100">
//       <div>
//       <label>Genre:</label>

// <select onChange={handleGenreChange}>
//   <option value="">Select Genre</option>
//   {product?.data.map((book: IProduct) => (
//     <option key={book._id} value={book.genre}>
//       {book.genre}
//     </option>
//   ))}
// </select>
// <br />
// <label>Publication Year:</label>
// <select onChange={handleYearChange}>
//   <option value="">Select Date</option>
//   {product?.data.map((book: IProduct) => (
//     <option key={book._id} value={book.published_date}>
//       {book.published_date}
//     </option>
//   ))}
// </select>
//       </div>
//       <div className="flex-1">
//         <a className="btn btn-ghost normal-case text-xl">Book Shop</a>
//       </div>
//       <div>
//         <ul className="flex items-center">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/products">All Book</Link>
//           </li>
//           <li>
//             <Link to="/addproduct">Add Book</Link>
//           </li>
//           <li>
//             <Link to="/filter">Filter Book</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="flex-none gap-2">
//         <div className="navbar bg-base-100">
//           {/* ...existing code... */}
//           <div className="flex-none gap-2">
//             <div className="form-control">
//               <input
//                 type="text"
//                 value={searchTitle}
//                 onChange={handleSearch}
//                 placeholder="Search books..."
//                 className="input input-bordered w-24 md:w-auto"
//               />
//             </div>
//           </div>

//           <div>
//             <ul>
//               {books &&
//                 books?.data.map((book: IProduct) => (
//                   <div className="card w-96 bg-base-100 shadow-xl image-full">
//                     <div className="card-body">
//                       <h2 className="card-title">{book.title}</h2>
//                       <p>{book.author}</p>
//                       <div className="card-actions justify-end">
//                         <button className="btn btn-primary">
//                           {book.genre}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </ul>
//           </div>
//         </div>

//         <div className="dropdown dropdown-end">
//           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full">
//               <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//             </div>
//           </label>
//           <ul
//             tabIndex={0}
//             className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li>
//               <a>Settings</a>
//             </li>
//             {!user.email && (
//               <>
//                 <li>
//                   <Link to={"/login"}>Login</Link>
//                 </li>
//                 <li>
//                   <Link to={"/signup"}>SignUP</Link>
//                 </li>
//               </>
//             )}
//             {user.email && (
//               <li onClick={handleLogout}>
//                 <a>Logout</a>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { setUser } from "../redux/feature/user/userSlice";
import { auth } from "../lib/firebase";
import { useGetProductsQuery } from "../redux/feature/product/apiSlice";
import { IProduct } from "../types/globalTypes";
import { useGetBooksQuery } from "../redux/feature/filter/booksApi";
import {
  searchByAuthor,
  searchByTitle,
  setGenreFilter,
  setYearFilter,
} from "../redux/feature/filter/filterSlice";
import BookList from "../pages/BookList";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    console.log("Logout");
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  // Search book
  const searchTitle = useAppSelector((state) => state.filter.title);
  const searchByAuthors = useAppSelector((state) => state.filter.author);
  const searchGenre = useAppSelector((state) => state.filter.genre);
  const {
    data: books,
    isLoading,
    error,
  } = useGetBooksQuery({
    title: searchTitle,
    author: searchByAuthors,
    genre: searchGenre,
  });
  console.log(isLoading);
  console.log(error);

  const handleSearch = (e: { target: { value: string } }) => {
    const query = e.target.value;
    dispatch(searchByAuthor(query));
    dispatch(searchByTitle(query));
    dispatch(setGenreFilter(query));
  };

  // Filter
  const {
    data: product,
    isLoading: islo,
    isError,
  } = useGetProductsQuery(undefined);
  console.log(islo);
  console.log(isError);

  const handleGenreChange = (e: { target: { value: string } }) => {
    dispatch(setGenreFilter(e.target.value));
    e.target.value = "";
  };

  const handleYearChange = (e: { target: { value: string } }) => {
    dispatch(setYearFilter(e.target.value));
    e.target.value = "";
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div>
          <label>Genre:</label>
          <select onChange={handleGenreChange}>
            <option value="">Select Genre</option>
            {product?.data.map((book: IProduct) => (
              <option key={book._id} value={book.genre}>
                {book.genre}
              </option>
            ))}
          </select>
          <br />
          <label>Publication Year:</label>
          <select onChange={handleYearChange}>
            <option value="">Select Date</option>
            {product?.data.map((book: IProduct) => (
              <option key={book._id} value={book.published_date}>
                {book.published_date}
              </option>
            ))}
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
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              value={searchTitle}
              onChange={handleSearch}
              placeholder="Search books..."
              className="input input-bordered w-24 md:w-auto"
            />
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/profile.jpg" alt="avatar" />
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

      {/* search content */}
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {books &&
          books?.data.map((book: IProduct) => (
            <div
              key={book._id}
              className="card w-96 bg-base-100 shadow-xl image-full"
            >
              <div className="card-body">
                <h2 className="card-title">Book Name:{book.title}</h2>
                <p>Author Name:{book.author}</p>
                <div className="card-actions justify-end">
                  <p>Book Genre:{book.genre}</p>
                </div>
                <p>Publication Year:{book.published_date}</p>
              </div>
            </div>
          ))}
      </div>
      <BookList />
    </>
  );
}
