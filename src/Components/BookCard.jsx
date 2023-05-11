import { Link } from "react-router-dom";
import { useBookContext } from "..";

export default function BookCard(book) {
  const {
    addToFavouriteHandler,
    markBookAsRead,
    readList,
    favouriteList
  } = useBookContext();
  const {
    id,
    title,
    author,
    publisher,
    year,
    image,
    price,
    read,
    showDetails
  } = book;

  const isBookInFav = favouriteList?.find((b) => b.id === id);
  return (
    <div
      key={id}
      style={{
        maxWidth: "12rem",
        padding: "1rem",
        margin: "0.5rem",
        border: "0.1rem solid"
      }}
    >
      <img
        src={image}
        style={{ width: "100%", height: "50%", objectFit: "contain" }}
        alt={title}
      />
      <p>{id}</p>
      <p>Title : {title}</p>
      <p>Author : {author}</p>
      {showDetails ? (
        <>
          <p>Publisher : {publisher}</p>
          <p>Year : {year}</p>
          <p>Price : {price}</p>
        </>
      ) : (
        <>
          {readList?.find((b) => b.id === id) ? (
            <button disabled={true}>Already read</button>
          ) : (
            <button onClick={() => markBookAsRead(book)}>Mark as read</button>
          )}
          {isBookInFav ? (
            <Link to="/favourites">Go to fav</Link>
          ) : (
            <button onClick={() => addToFavouriteHandler(book)}>
              Add to fav
            </button>
          )}
        </>
      )}
    </div>
  );
}
