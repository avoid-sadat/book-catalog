/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetBooksQuery } from "../redux/feature/filter/booksApi";
import { useAppSelector } from "../redux/hook";
import { IProduct } from "../types/globalTypes";

export default function BookList() {
  const genreFilter = useAppSelector((state) => state.filter.genre);
  const yearFilter = useAppSelector((state) => state.filter.published_date);

  const {
    data: books,
    error,
    isLoading,
  } = useGetBooksQuery({ genre: genreFilter, published_date: yearFilter });
  console.log(books);
  console.log(error);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: not found</div>;
  }

  return (
    <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
      {books &&
        books?.data.map((book: IProduct) => (
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p>Author Name:{book.author}</p>
              <div className="card-actions justify-end">
                <p>Book Genre:{book.genre}</p>
              </div>
              <p>Publication Year:{book.genre}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
