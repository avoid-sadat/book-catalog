/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from 'react-redux';
import { setGenreFilter, setYearFilter } from '../redux/feature/filter/filterSlice';
import BookList from './BookList';
import { useGetProductsQuery } from '../redux/feature/product/apiSlice';
import { IProduct } from '../types/globalTypes';


export default function FilterOptions() {
    const {data:product,isLoading,isError} = useGetProductsQuery(undefined)
    console.log(isLoading)
    console.log(isError)
    const dispatch = useDispatch();

    const handleGenreChange = (e: { target: { value: string; }; }) => {
      dispatch(setGenreFilter(e.target.value));
    };
  
    const handleYearChange = (e: { target: { value: string; }; }) => {
      dispatch(setYearFilter(e.target.value));
    };
  return (
    <>
   <BookList/>
    <div>
          <label>Genre:</label>

          <select  onChange={handleGenreChange}>
        <option value="">Select Genre</option>
        {product?.data.map((book:IProduct) => (
          <option key={book._id} value={book.genre}>
            {book.genre}
          </option>
        ))}
      </select>
          <br />
          <label>Publication Year:</label>
          <select  onChange={handleYearChange}>
        <option value="">Select  Date</option>
        {product?.data.map((book:IProduct) => (
          <option key={book._id} value={book.published_date}>
            {book.published_date}
          </option>
        ))}
      </select>
      </div></>
  )
  
}
