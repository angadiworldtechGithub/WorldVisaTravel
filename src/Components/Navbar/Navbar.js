import React, { useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar_page">
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="Logo">
          <img src="assets/logo.png" alt="logo" width="300px"></img>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          Menu
        </div>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT US</Link>
          </li>
          <li>
            <Link>PASSPORT</Link>
          </li>
          <li>
            <Link>VISA</Link>
          </li>
          <li>
            <Link>LEGALIZATIONS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>

        <div className="Navbar_right">
          <div className="Navbar_right1">
            <ul className="Navbarright_list">
              <li>Have any Questions?</li>
              <li>+(202) 289-6251</li>
            </ul>
            <i className="Navbarright_icon">
              <LuMessagesSquare />
            </i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
