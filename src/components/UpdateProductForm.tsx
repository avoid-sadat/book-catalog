import { ChangeEvent, FormEvent, useState } from 'react';
import { useGetProductDetailsQuery, useUpdateProductMutation } from '../redux/feature/product/apiSlice';
import { useParams } from 'react-router-dom';

interface FormData {
  title: string;
  author: string;
  genre: string;
  published_date: string;
}

export default function UpdateProductForm() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useGetProductDetailsQuery(id);

  const [inputValues, setInputValues] = useState<FormData>({
    title: product?.title || '',
    author: product?.author || '',
    genre: product?.genre || '',
    published_date: product?.published_date || '',
  });

  const [updateProduct, { isLoading: isload, isError, isSuccess }] = useUpdateProductMutation();
console.log(isload)
console.log(isError)
console.log(isSuccess)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValues);
    const options = {
      id: id,
      data: inputValues,
    };
    updateProduct(options);

    setInputValues({
      title: '',
      author: '',
      genre: '',
      published_date: '',
    });
    alert('Book Updated successfully');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className='flex justify-center mb-4'>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading product details.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center mb-4'>
            <label htmlFor="title">Title:</label>
            <input className="input input-bordered input-secondary w-full max-w-xs text-center" name="title"  onChange={handleChange} value={inputValues.title} />
          </div>
          <div className='flex justify-center mb-4'>
            <label htmlFor="author">Author:</label>
            <input className="input input-bordered input-secondary w-full max-w-xs text-center" name="author"  onChange={handleChange} value={inputValues.author} />
          </div>
          <div className='flex justify-center mb-4'>
            <label htmlFor="genre">Genre:</label>
            <input className="input input-bordered input-secondary w-full max-w-xs text-center" name="genre"  onChange={handleChange} value={inputValues.genre} />
          </div>
          <div className='flex justify-center mb-4'>
            <label htmlFor="published_date">Published Date:</label>
            <input className="input input-bordered input-secondary w-full max-w-xs text-center" name="published_date"  onChange={handleChange} value={inputValues.published_date} />
          </div>
          <button className="btn btn-active btn-accent" type="submit">Update Product</button>
        </form>
      )}
    </div>
  );
}
