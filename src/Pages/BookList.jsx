import { useBookContext } from "..";
import BookCard from "../Components/BookCard";

export default function BookList() {
  const { bookList } = useBookContext();
  if (bookList.length < 1) return <h1>Loading</h1>;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "1rem"
      }}
    >
      {bookList?.map((book) => {
        return <BookCard key={book.id} {...book} />;
      })}
    </div>
  );
}
