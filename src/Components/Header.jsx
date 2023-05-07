import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav>
        <Link to="/">All Books</Link> <Link to="/favourites">Favourites</Link>{" "}
        <Link to="/read-books">Read</Link> <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
}
