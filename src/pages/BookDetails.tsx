
import { IProduct } from '../types/globalTypes';

interface IProps {
    book: IProduct;
  }

export default function BookDetails({ book }: IProps) {
  return (
    <div className="card w-96 bg-primary text-primary-content">
    <div className="card-body">
        
        <h2 className="card-title">BooK Title:{book.title}</h2>

       
      <p>Author Name:{book.author}</p>
      <p>Genere :{book.genre}</p>
      <p>Published Date:{book.published_date}</p>
      <div className="card-actions justify-end">
      </div>
    </div>
  </div>
  )
}
