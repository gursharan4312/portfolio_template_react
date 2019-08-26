import React, { useEffect } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggle = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    if (showMenu) {
      document.getElementById("navigation-menu").style.display = "block";
    } else {
      document.getElementById("navigation-menu").style.display = "none";
    }
  });
  return (
    <nav>
      <div className="container-navigation">
        <a href="#" className="logo">
          G.S
        </a>
        <i className="fa fa-bars" onClick={toggle}></i>
      </div>
      <ul id="navigation-menu">
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
