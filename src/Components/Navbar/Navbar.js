import React, { useState, useEffect } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import BurgerIcon from "../icons/BurgerIcon";
import { within } from "@testing-library/react";

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
          <img src="assets/logo.png" alt="logo" width="300px"></img>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <BurgerIcon />
        </div>
        <ul
          className={`menu ${menuOpen ? "open" : ""}`}
          style={{
            backgroundColor: menuOpen ? "#5d6975" : "",
          }}
        >
          <li>
            <NavLink
              to={"/"}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "#2c3a90" : "white",
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
                  color: isActive ? "#2c3a90" : "white",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink>PASSPORT</NavLink>
          </li>
          <li>
            <NavLink>VISA</NavLink>
          </li>
          <li>
            <NavLink>LEGALIZATIONS</NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "#2c3a90" : "white",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              CONTACT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "900" : "",
                  color: isActive ? "#2c3a90" : "white",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              FEEDBACK
            </NavLink>
          </li>
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
