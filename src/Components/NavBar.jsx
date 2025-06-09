import { Link } from "react-router-dom";
import "./css/Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie Search & Favorites</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/Favorites" className="nav-links">
          Favourites
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
