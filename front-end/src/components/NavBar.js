import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
