import { NavLink } from "react-router-dom";
export default function Header() {
  const getStyle = ({ isActive }) => {
    return isActive ? "menu menu-active" : "menu";
  };
  return (
    <div>
      <nav>
        <NavLink to="/" className={getStyle}>
          All Books
        </NavLink>{" "}
        {"||"}{" "}
        <NavLink to="/favourites" className={getStyle}>
          Favourites
        </NavLink>{" "}
        {"||"}{" "}
        <NavLink to="/read-books" className={getStyle}>
          Read
        </NavLink>{" "}
        {"||"}{" "}
        <NavLink to="/profile" className={getStyle}>
          Profile
        </NavLink>
      </nav>
    </div>
  );
}
