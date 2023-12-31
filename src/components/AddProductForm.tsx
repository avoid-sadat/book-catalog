/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAddProductMutation } from '../redux/feature/product/apiSlice';
import { useAppSelector } from '../redux/hook';


interface FormData {
  title: string;
  author: string;
  genre: string;
  published_date: string;
  email:string | null 
}

export default function AddProductForm() {
  const {user} = useAppSelector((state)=>state.user)
  const email = user.email || '';
  const [inputValues, setInputValues] = useState<FormData>({
    title: '',
    author: '',
    genre: '',
    published_date: '',
    email:email
  });
  
  const [addProduct, { isLoading, isError, isSuccess }] = useAddProductMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(inputValues);
  //   // const options = {
  //   //    inputValues
  //   // };
  //   addProduct(inputValues);
    
  //   setInputValues({
  //     title: '',
  //     author: '',
  //     genre: '',
  //     published_date: '',
  //     email:email
  //   });
  //  alert("Book added successfully")
  // };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValues);
    try {
      await addProduct(inputValues).unwrap();
      setInputValues({
        title: '',
        author: '',
        genre: '',
        published_date: '',
        email: email,
      });
      alert('Book added successfully');
    } catch (error) {
      console.log('Error adding the book:', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center mb-4'>
          <label htmlFor="title">Title:</label>
          <input className="input input-bordered input-secondary w-full max-w-xs" name="title" onChange={handleChange} value={inputValues.title} />
        </div>
        <div className='flex justify-center mb-4'>
          <label htmlFor="author">Author:</label>
          <input className="input input-bordered input-secondary w-full max-w-xs" name="author" onChange={handleChange} value={inputValues.author} />
        </div>
        <div className='flex justify-center mb-4'>
          <label htmlFor="genre">Genre:</label>
          <input className="input input-bordered input-secondary w-full max-w-xs" name="genre" onChange={handleChange} value={inputValues.genre} />
        </div>
        <div className='flex justify-center mb-4'>
          <label htmlFor="published_date">Published Date:</label>
          <input className="input input-bordered input-secondary w-full max-w-xs"
            name="published_date"
            onChange={handleChange}
            value={inputValues.published_date}
          />
        </div>
        <div className='flex justify-center mb-4'>
        <input className="input input-bordered input-secondary w-full max-w-xs" type="hidden" name="email" onChange={handleChange} value={inputValues.email!} />

        </div>
        <button className="btn btn-active btn-accent" type="submit">Add Product</button>
      </form>
    </div>
  );
}
