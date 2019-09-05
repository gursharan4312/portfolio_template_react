import React from "react";

import "./Projects.scss";
export default function Projects(props) {
  const { theme, projects } = props;
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
        {projects.map((project, i) => {
          return (
            <div className="project" key={i}>
              <h2>{project.name}</h2>
              <img
                src={`${process.env.PUBLIC_URL}/assests/images/${project.image}`}
              />
              <p>{project.description}</p>
              <p>
                <strong>Technologies used:</strong>{" "}
                {project.techUsed.toString()}
              </p>
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
