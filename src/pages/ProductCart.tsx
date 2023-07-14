import React from 'react'
import { IProduct } from '../types/globalTypes';
import { Link } from 'react-router-dom';

interface IProps {
    product: IProduct;
  }

export default function ProductCart({ product }: IProps) {
  return (
    <div className="card w-96 bg-primary text-primary-content">
    <div className="card-body">
        <Link to={`/product-details/${product._id}`}>
        <h2 className="card-title">BooK Title:{product.title}</h2>

        </Link>
      <p>Author Name:{product.author}</p>
      <p>Genere :{product.genre}</p>
      <p>Published Date:{product.published_date}</p>
      <div className="card-actions justify-end">
        <button className="btn">ADD Now</button>
      </div>
    </div>
  </div>
  )
}
