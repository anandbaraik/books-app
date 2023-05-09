import { useBookContext } from "..";
import BookCard from "../Components/BookCard";

export default function BookList() {
  const { bookList } = useBookContext();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {bookList?.map((book) => {
        return <BookCard key={book.id} {...book} showBtns />;
      })}
    </div>
  );
}
