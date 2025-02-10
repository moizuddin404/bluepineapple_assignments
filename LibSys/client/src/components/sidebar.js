import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <Menu>
      <Link className="menu-item home" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/add-book">
        Add Books
      </Link>
      <Link className="menu-item" to="/issues">
        Issues
      </Link>
      <Link className="menu-item" to="/reviews">
        Reviews
      </Link>
    </Menu>
  );
}
