import "./navbar.css";
import { useDispatch } from "react-redux";
import { signin, signout } from "../redux/actions";
import { Link } from "react-router-dom";
function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="navbar-container">
      <div className="navbar">
        <p>Logo</p>
        <ul className="pages-list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          {/* <Link to="/login"> */}
          <li onClick={() => dispatch(signin())}>Login</li>
          {/* </Link> */}
          <li onClick={() => dispatch(signout())}>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
