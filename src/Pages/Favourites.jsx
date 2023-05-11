import { useBookContext } from "..";
import BookCard from "../Components/BookCard";
export default function Favourites() {
  const { favouriteList } = useBookContext();
  if (favouriteList.length < 1) return <h1>Add some book!</h1>;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: "1rem"
      }}
    >
      {favouriteList?.map((book) => {
        return <BookCard key={book.id} {...book} showDetails />;
      })}
    </div>
  );
}
