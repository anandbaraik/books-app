import { useBookContext } from "..";
import BookCard from "../Components/BookCard";
export default function ReadBooksList() {
  const { readList } = useBookContext();
  if (readList.length < 1) return <h1>Loading...</h1>;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "1rem"
      }}
    >
      {readList?.map((book) => {
        return <BookCard key={book.id} {...book} showDetails />;
      })}
    </div>
  );
}
