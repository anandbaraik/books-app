import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../API/fakeFetch";
const BookContext = createContext({
  bookList: [],
  user: {},
  readList: [],
  favouriteList: [],
  addToFavouriteHandler: () => {},
  markBookAsRead: () => {}
});

export const BookContextProvider = ({ children }) => {
  const URL = "https://example.com/api/books";
  const [bookList, setBookList] = useState([]);
  const [user, setUser] = useState({});
  const [readList, setReadList] = useState([]);
  const [favouriteList, setFavouriteList] = useState([]);

  const addToFavouriteHandler = () => {};
  const markBookAsRead = () => {};

  const getBooks = async () => {
    try {
      const {
        data: { books, user }
      } = await fakeFetch("https://example.com/api/books");
      if (user) setUser(user);
      if (books) setBookList(books);
    } catch ({ status, message }) {
      console.error(`${status} :  ${message}`);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <BookContext.Provider
      value={{
        bookList,
        user,
        readList,
        favouriteList,
        addToFavouriteHandler,
        markBookAsRead
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  return useContext(BookContext);
};
