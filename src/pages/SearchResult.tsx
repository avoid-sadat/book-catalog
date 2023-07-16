import React from 'react'
import { Product } from '../types/globalTypes';


interface SearchResultProps {
    product: Product | undefined;
  }
export default function SearchResult({ product }: SearchResultProps ) {
   
    if (!product) {
        return <p>Loading...</p>; // Placeholder or loading state
      }
  return (
    <div>
          <li>
      <h3>Title:{product.title}</h3>
      <p>Author: {product.author}</p>
      <p>Genre: {product.genre}</p>
    </li>
    </div>
  )
}
