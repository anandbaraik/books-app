import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import BookList from "./Pages/BookList";
import Favourites from "./Pages/Favourites";
import ReadBooksList from "./Pages/ReadBooksList";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="read-books" element={<ReadBooksList />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
