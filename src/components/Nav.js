import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-links" to="articles">
        Articles
      </Link>
      <h1>NC-NEWS</h1>
    </div>
  );
};

export default Nav;
