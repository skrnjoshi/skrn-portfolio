import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/img/skrnlogo.png"; // Adjust path accordingly
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <Link to="#" className="nav__logo">
            <img
              src={logo}
              alt="Saikiran"
              className="nav__img"
              style={{ width: "50px", height: "auto" }}
            />
          </Link>
        </div>
        <div className={`nav__menu ${showMenu ? "show" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="#home"
                className="nav__link active-link"
                onClick={hideMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#about" className="nav__link" onClick={hideMenu}>
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#skills" className="nav__link" onClick={hideMenu}>
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#projects" className="nav__link" onClick={hideMenu}>
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#work" className="nav__link" onClick={hideMenu}>
                Work
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#contact" className="nav__link" onClick={hideMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <DarkModeToggle />
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <DarkModeToggle />
          <i className="bx bx-menu" id="icon_toggle"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
