import React, { useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";

export default function Navbar(props) {
  const [showMenu, setShowMenu] = React.useState(false);
  const { theme, setTheme, name } = props;
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
        {/* <a
          href="#"
          className="logo"
          style={{ color: theme === "dark" ? "#fff" : "#000" }}
        >
          {name.split(" ").map(name => `${name.charAt(0).toUpperCase()}.`)}
        </a> */}
        <Link
          to="home"
          spy={false}
          smooth={true}
          style={{ color: theme === "dark" ? "#fff" : "#000" }}
          className="logo"
        >
          {name.split(" ").map(name => `${name.charAt(0).toUpperCase()}.`)}
        </Link>
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
            className="btn"
          >
            Resume
          </a>
        </li>
        <li>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            style={{ color: theme === "dark" ? "#fff" : "#000" }}
            className="btn"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            style={{ color: theme === "dark" ? "#fff" : "#000" }}
            className="btn"
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            style={{ color: theme === "dark" ? "#fff" : "#000" }}
            className="btn"
          >
            Contact
          </Link>
        </li>
        <li>
          <button
            href="#"
            onClick={changeTheme}
            style={{
              color: theme === "dark" ? "#000" : "#fff",
              background: theme === "dark" ? "#ddd" : "#000"
            }}
            // className="btn"
            id="theme-btn"
          >
            {theme === "dark" ? "Light" : "Dark"} Theme
          </button>
        </li>
      </ul>
    </nav>
  );
}
