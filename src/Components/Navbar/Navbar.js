import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import BurgerIcon from "../icons/BurgerIcon";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="nav-container"
      style={{ position: "sticky", top: 0, zIndex: 10000 }}
    >
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="logo">
          <img src="/assets/logo.png" alt="logo" width="300px"></img>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <BurgerIcon />
        </div>
        <ul
          className={`menu ${menuOpen ? "open" : ""}`}
          style={{
            backgroundColor: menuOpen ? "rgb(214 248 255)" : "",
          }}
        >
          <li>
            <NavLink
              to={"/"}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "#2c3a90" : "Black",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "#2c3a90" : "Black",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/passports"}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "#2c3a90" : "Black",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              PASSPORT
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/visas"}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "#2c3a90" : "Black",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              VISAS
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/legalizations"}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "#2c3a90" : "Black",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              LEGALIZATIONS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "#2c3a90" : "Black",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              CONTACT US
            </NavLink>
          </li>
          {/*<li>
           <NavLink
              to="/feedback"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "#2c3a90" : "Black",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              FEEDBACK
            </NavLink>
            </li>*/}
        </ul>

        {/* <div className="Navbar_right">
          <div className="Navbar_right1">
            <ul className="Navbarright_list">
              <li>Have any Questions?</li>
              <li>+(202) 289-6251</li>
            </ul>
            <i className="Navbarright_icon">
              <LuMessagesSquare />
            </i>
          </div>
        </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
