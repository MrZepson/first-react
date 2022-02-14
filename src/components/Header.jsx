import { Link } from "react-router-dom";

const Header = () => {
  const listStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <header className="header">
      <Link to="/" style={listStyle}>
        <h1 className="logo">Logo</h1>
      </Link>
      <ul className="navlist">
        <Link to="/services" style={listStyle}>
          <li>Services</li>
        </Link>
        <Link to="/about" style={listStyle}>
          <li>About us</li>
        </Link>
        <Link to="/login" style={listStyle}>
          <li>Log in</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
