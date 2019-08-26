import React from "react";
import project from "./project.jpg";
import "./Projects.scss";
export default function Projects() {
  return (
    <section className="projects-container" id="projects">
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
          <a href="#">Github</a>
          <a href="#">View Live</a>
        </div>
        <div className="project">
          <h2>Project 1</h2>
          <img src={project} />
          <p>
            little decription about the project little decription about the
            project little decription about the project little decription about
            the project
          </p>
          <a href="#">Github</a>
          <a href="#">View Live</a>
        </div>
        <div className="project">
          <h2>Project 1</h2>
          <img src={project} />
          <p>
            little decription about the project little decription about the
            project little decription about the project little decription about
            the project
          </p>
          <a href="#">Github</a>
          <a href="#">View Live</a>
        </div>
        <div className="project">
          <h2>Project 1</h2>
          <img src={project} />
          <p>
            little decription about the project little decription about the
            project little decription about the project little decription about
            the project
          </p>
          <a href="#">Github</a>
          <a href="#">View Live</a>
        </div>
        <div className="project">
          <h2>Project 1</h2>
          <img src={project} />
          <p>
            little decription about the project little decription about the
            project little decription about the project little decription about
            the project
          </p>
          <a href="#">Github</a>
          <a href="#">View Live</a>
        </div>
        <div className="project">
          <h2>Project 1</h2>
          <img src={project} />
          <p>
            little decription about the project little decription about the
            project little decription about the project little decription about
            the project
          </p>
          <a href="#">Github</a>
          <a href="#">View Live</a>
        </div>
      </div>
    </section>
  );
}
