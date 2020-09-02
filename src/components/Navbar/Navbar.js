import React from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";

export default function Navbar(props) {
  const [showMenu, setShowMenu] = React.useState(false);
  const { theme, setTheme, name, resume } = props;
  const toggle = () => {
    setShowMenu(!showMenu);
  };
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    toggle();
  };
  return (
    <nav
      style={{
        background: theme === "dark" ? "#252934" : "#fff",
      }}
    >
      <div className="container-navigation">
        <Link
          to="home"
          spy={false}
          offset={-100}
          smooth={true}
          style={{ color: theme === "dark" ? "#fff" : "#000" }}
          className="logo"
        >
          {name.split(" ").map((name) => `${name.charAt(0).toUpperCase()}.`)}
        </Link>
        <i
          className="fa fa-bars"
          onClick={toggle}
          style={{ color: theme === "dark" ? "#fff" : "#000" }}
        ></i>
      </div>
      <ul id="navigation-menu" style={{ display: showMenu ? "block" : "none" }}>
        <li>
          <a
            href={`${process.env.PUBLIC_URL}/assests/resume/${resume}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme === "dark" ? "#fff" : "#000" }}
            className="btn"
          >
            Resume
          </a>
        </li>
        <li>
          <Link
            to="aboutme"
            // offset={-220}
            spy={true}
            smooth={true}
            style={{ color: theme === "dark" ? "#fff" : "#000" }}
            className="btn"
            onClick={toggle}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            // offset={-220}
            smooth={true}
            style={{ color: theme === "dark" ? "#fff" : "#000" }}
            className="btn"
            onClick={toggle}
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
            onClick={toggle}
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
              background: theme === "dark" ? "#ddd" : "#000",
            }}
            id="theme-btn"
          >
            {theme === "dark" ? "Light" : "Dark"} Theme
          </button>
        </li>
      </ul>
    </nav>
  );
}
