

const dummyComments = [
  'Bhalo na',
  'Ki shob ghori egula??',
  'Eta kono product holo ??',
  '200 taka dibo, hobe ??',
];

export default function ProductReview() {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5 items-center">
      <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
      <input type="submit" value="Submit" className="btn" />
      </div>
      <div className="mt-10">
        {dummyComments.map((comment, index) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
