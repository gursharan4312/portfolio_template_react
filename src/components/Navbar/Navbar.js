import React, { useEffect } from "react";
import "./Navbar.scss";

export default function Navbar(props) {
  const [showMenu, setShowMenu] = React.useState(false);
  const { theme, setTheme } = props;
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
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav
      style={{
        background: theme === "dark" ? "#252934" : "#fff"
      }}
    >
      <div className="container-navigation">
        <a
          href="#"
          className="logo"
          style={{ color: theme === "dark" ? "#fff" : "#000" }}
        >
          G.S
        </a>
        <i
          className="fa fa-bars"
          onClick={toggle}
          style={{ color: theme === "dark" ? "#fff" : "#000" }}
        ></i>
      </div>
      <ul id="navigation-menu">
        <li>
          <a
            href="#resume"
            style={{ color: theme === "dark" ? "#fff" : "#000" }}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#projects"
            style={{ color: theme === "dark" ? "#fff" : "#000" }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#aboutme"
            style={{ color: theme === "dark" ? "#fff" : "#000" }}
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="#contact"
            style={{ color: theme === "dark" ? "#fff" : "#000" }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={changeTheme}
            style={{ color: theme === "dark" ? "#fff" : "#000" }}
          >
            {theme === "dark" ? "Light" : "Dark"} Theme
          </a>
        </li>
      </ul>
    </nav>
  );
}
