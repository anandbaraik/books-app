import { useBookContext } from "..";

export default function BookList() {
  const { BookList } = useBookContext;
  console.log(BookList);
  return (
    <div>
      {BookList?.map(
        ({ id, title, author, publisher, year, image, price, read }) => {
          return <div></div>;
        }
      )}
    </div>
  );
}
