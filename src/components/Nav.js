import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-links" to="articles">
        <h2>Home</h2>
      </Link>
      <h1>NC-NEWS</h1>
    </div>
  );
};

export default Nav;
