import React from "react";
import project from "./project.jpg";
import "./Projects.scss";
export default function Projects(props) {
  const { theme } = props;
  const linkStyle = {
    color: theme === "dark" ? "#fff" : "#000",
    borderColor: theme === "dark" ? "#fff" : "#ddd"
  };
  return (
    <section
      className="projects-container"
      id="projects"
      style={{
        background: theme === "dark" ? "#252934" : "#fff",
        color: theme === "dark" ? "#fff" : "#000"
      }}
    >
      <h1>
        <u>Projects</u>
      </h1>
      <div className="projects">
        <div className="project">
          <h2>Project 1</h2>
          <img src={project} />
          <p>
            little decription about the project little decription about the
            project little decription about the project little decription about
            the project
          </p>
          <a href="#" style={linkStyle}>
            Github
          </a>
          <a href="#" style={linkStyle}>
            View Live
          </a>
        </div>
        <div className="project">
          <h2>Project 1</h2>
          <img src={project} />
          <p>
            little decription about the project little decription about the
            project little decription about the project little decription about
            the project
          </p>
          <a href="#" style={linkStyle}>
            Github
          </a>
          <a href="#" style={linkStyle}>
            View Live
          </a>
        </div>
        <div className="project">
          <h2>Project 1</h2>
          <img src={project} />
          <p>
            little decription about the project little decription about the
            project little decription about the project little decription about
            the project
          </p>
          <a href="#" style={linkStyle}>
            Github
          </a>
          <a href="#" style={linkStyle}>
            View Live
          </a>
        </div>
        <div className="project">
          <h2>Project 1</h2>
          <img src={project} />
          <p>
            little decription about the project little decription about the
            project little decription about the project little decription about
            the project
          </p>
          <a href="#" style={linkStyle}>
            Github
          </a>
          <a href="#" style={linkStyle}>
            View Live
          </a>
        </div>
        <div className="project">
          <h2>Project 1</h2>
          <img src={project} />
          <p>
            little decription about the project little decription about the
            project little decription about the project little decription about
            the project
          </p>
          <a href="#" style={linkStyle}>
            Github
          </a>
          <a href="#" style={linkStyle}>
            View Live
          </a>
        </div>
        <div className="project">
          <h2>Project 1</h2>
          <img src={project} />
          <p>
            little decription about the project little decription about the
            project little decription about the project little decription about
            the project
          </p>
          <a href="#" style={linkStyle}>
            Github
          </a>
          <a href="#" style={linkStyle}>
            View Live
          </a>
        </div>
      </div>
    </section>
  );
}
