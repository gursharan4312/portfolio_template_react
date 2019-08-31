import React from "react";
import "./HeroSection.scss";
import Particles from "react-particles-js";

export default function HeroSection(props) {
  const { theme } = props;
  const particles = {
    particles: {
      number: {
        value: 500
      },
      color: {
        value: theme === "dark" ? "#fff" : "#000"
      },
      line_linked: {
        enable: false
      },
      size: {
        value: 3,
        anim: {
          enable: true,
          speed: 2
        }
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
          Hi, I'm <span>Gursharan Singh</span>
        </h1>
        <h2>I'm a full-stact web-developer</h2>
        <a
          href="#projects"
          style={{
            color: theme === "dark" ? "#fff" : "#000",
            borderColor: theme === "dark" ? "#fff" : "#000"
          }}
          className="btn"
        >
          View Projects
        </a>
        <a
          href="#contact"
          style={{
            color: theme === "dark" ? "#fff" : "#000",
            borderColor: theme === "dark" ? "#fff" : "#000"
          }}
          className="btn"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
