import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import BurgerIcon from "../icons/BurgerIcon";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState("");
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div
      className="nav-container"
      style={{ position: "sticky", top: 0, zIndex: 10000 }}
    >
      <nav className={`navbar ${menuOpen ? "open" : "close"}`}>
        <div className="logo">
          <Link to="/">
            <img src="/assets/logo.png" alt="logo" width="250px"></img>
          </Link>
        </div>
      
          <div className="menu-toggle" onClick={toggleMenu}>
            <BurgerIcon />
          </div>
        

        
          <ul
            className={`menu ${menuOpen ? "open" : "close"}`}
          >
            <li>
              <NavLink
                className="navbar-link"
                style={{ color: "#2c3A90" }}
                to={"/"}
                onClick={()=>setMenuOpen(false)}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                style={{ color: "#2c3A90" }}
                to={"/about"}
                onClick={()=>setMenuOpen(false)}
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                style={{ color: "#2c3A90" }}
                to={"/passports"}
                onClick={()=>setMenuOpen(false)}
              >
                PASSPORT
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                style={{ color: "#2c3A90" }}
                to={"/visas"}
                onClick={()=>setMenuOpen(false)}
              >
                VISAS
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                style={{ color: "#2c3A90" }}
                to={"/legalizations"}
                onClick={()=>setMenuOpen(false)}
              >
                LEGALIZATIONS
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                style={{ color: "#2c3A90" }}
                to="/contact"
                onClick={()=>setMenuOpen(false)}
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
        
      </nav>
    </div>
  );
}

export default Navbar;
