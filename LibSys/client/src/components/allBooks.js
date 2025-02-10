import { RecipeReviewCard } from "./bookCards.js";

export function AllBooks({ data, handleDelete }) {
  const rows = [];
  for (let i = 0; i < data.length; i++) {
    rows.push(
      <RecipeReviewCard
        key={data[i].bookId}
        bookName={data[i].bookName}
        url={data[i].url}
        handleDelete={handleDelete}
      />
    );
  }

  return <div className="books-cards-container">{rows}</div>;
}
