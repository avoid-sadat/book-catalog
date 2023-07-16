import { ChangeEvent, FormEvent, useState } from "react";
import { useGetCommentQuery, usePostCommentMutation } from "../redux/feature/product/apiSlice";

interface IProps {
  id: string;
}
export default function ProductReview({id}:IProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [postComment,{isLoading,isError,isSuccess}]=usePostCommentMutation()
  console.log(isLoading)
  console.log(isError)
  console.log(isSuccess)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);

    const options = {
      id: id,
      data: { comment: inputValue },
    };

    postComment(options);
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5 items-center">
        <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
      <textarea className="textarea textarea-info" 
          onChange={handleChange}
          value={inputValue} 
          placeholder="Bio">
          </textarea>
          <button type="submit" className="btn btn-secondary">Add Review</button>

           </form>
      </div>
      
      <div className="mt-10">
      {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
