import React from "react";
import "./HeroSection.scss";
import Particles from "react-particles-js";
import { Link, animateScroll as scroll } from "react-scroll";

export default function HeroSection(props) {
  const { theme, name, description } = props;
  const particles = {
    particles: {
      number: {
        value: 150
      },
      color: {
        value: theme === "dark" ? "#fff" : "#000"
      },
      line_linked: {
        enable: true,
        color: theme === "dark" ? "#fff" : "#000",
        opacity: 0.2
      },
      size: {
        value: 2
        // anim: {
        //   enable: true,
        //   speed: 2
        // }
      }
    },
    interactivity: {
      onhover: {
        enable: true
      }
    }
  };
  return (
    <div
      className="hero-section"
      style={{ background: theme === "dark" ? "#252934" : "#fff" }}
    >
      <Particles width="100%" height="90vh" params={particles} />
      <div
        className="hero-content"
        style={{ color: theme === "dark" ? "#fff" : "#000" }}
      >
        <h1>
          Hi, I'm <span>{name}</span>
        </h1>
        <h2>{description}</h2>
        <Link
          to="projects"
          smooth={true}
          style={{
            color: theme === "dark" ? "#fff" : "#000",
            borderColor: theme === "dark" ? "#fff" : "#000"
          }}
          className="btn"
        >
          View Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          style={{
            color: theme === "dark" ? "#fff" : "#000",
            borderColor: theme === "dark" ? "#fff" : "#000"
          }}
          className="btn"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
