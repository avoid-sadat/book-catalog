import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../redux/hook';
import { IProduct } from '../types/globalTypes';
import { useAddProductMutation } from '../redux/feature/product/apiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  title: string;
  author: string;
  genre: string;
  published_date: string;
}

export default function AddProductForm() {
  const [inputValues, setInputValues] = useState<FormData>({
    title: '',
    author: '',
    genre: '',
    published_date: '',
  });
  const [addProduct, { isLoading, isError, isSuccess }] = useAddProductMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValues);
    // const options = {
    //    inputValues
    // };
    addProduct(inputValues);
    
    setInputValues({
      title: '',
      author: '',
      genre: '',
      published_date: '',
    });
    toast.success('Book added successfully');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input name="title" onChange={handleChange} value={inputValues.title} />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input name="author" onChange={handleChange} value={inputValues.author} />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input name="genre" onChange={handleChange} value={inputValues.genre} />
        </div>
        <div>
          <label htmlFor="published_date">Published Date:</label>
          <input
            name="published_date"
            onChange={handleChange}
            value={inputValues.published_date}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
