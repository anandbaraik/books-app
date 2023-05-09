export default function BookCard(book) {
  const {
    id,
    title,
    author,
    publisher,
    year,
    image,
    price,
    read,
    showBtns
  } = book;
  console.log(book);
  return (
    <div
      key={id}
      style={{
        maxWidth: "15rem",
        padding: "1rem",
        margin: "0.5rem",
        border: "0.1rem solid"
      }}
    >
      <img src={image} style={{ width: "100%" }} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </div>
  );
}
