import React from "react";

import ImageGallery from "./ImageGallery/ImageGallery.js";
import "./Projects.scss";
export default function Projects(props) {
  const { theme, projects } = props;
  const linkStyle = {
    color: theme === "dark" ? "#fff" : "#000",
    borderColor: theme === "dark" ? "#fff" : "#ddd",
  };
  return (
    <section
      className="projects-container"
      id="projects"
      style={{
        background: theme === "dark" ? "#252934" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <h1>
        <u>Projects</u>
      </h1>
      <div className="projects">
        {projects.map((project, i) => {
          return (
            <div className="project" key={i}>
              <ImageGallery images={project.images} />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div>
                {project.techUsed.map((tech, i) => {
                  return (
                    <div
                      key={i}
                      className="tech-used"
                      style={{
                        background: theme === "dark" ? "#707070" : "#eee",
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
                      {tech}
                    </div>
                  );
                })}
              </div>
              <a href={project.github} style={linkStyle} className="btn">
                Github
              </a>
              <a href={project.live} style={linkStyle} className="btn">
                View Live
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
