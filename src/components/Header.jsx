import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const listStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <header className="header">
      <Link className="logo-link" to="/" style={listStyle}>
        <h1 className="logo">Logo</h1>
      </Link>
      <div className="burger-container">
        <div className="burger" onClick={() => setOpenNav(!openNav)}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>
      <ul className={openNav ? "navlist open" : "navlist"}>
        <Link
          to="/services"
          style={listStyle}
          onClick={() => setOpenNav(!openNav)}
        >
          <li>Services</li>
        </Link>
        <Link
          to="/about"
          style={listStyle}
          onClick={() => setOpenNav(!openNav)}
        >
          <li>About us</li>
        </Link>
        <Link
          to="/login"
          style={listStyle}
          onClick={() => setOpenNav(!openNav)}
        >
          <li>Log in</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
