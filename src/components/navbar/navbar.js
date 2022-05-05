import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="navbar-container">
      <div className="navbar">
        <p>Logo</p> {counter}
        <ul className="pages-list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
