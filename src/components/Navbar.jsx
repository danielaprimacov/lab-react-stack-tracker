import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">StackTracker</div>
      </Link>
    </nav>
  );
}

export default Navbar;
