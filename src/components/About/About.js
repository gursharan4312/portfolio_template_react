import React from "react";
import "./About.scss";
import about from "./about.jpg";
export default function About() {
  return (
    <section id="aboutme">
      <h1>
        <u>About me</u>
      </h1>
      <div className="top-qualities">
        <div className="quality">
          <i className="fa fa-briefcase" aria-hidden="true"></i>
          <h2>Freelance</h2>
          <p>freelancing for about 2 yeards dkfn adslkfnd fl</p>
        </div>
        <div className="quality">
          <i className="fa fa-briefcase" aria-hidden="true"></i>
          <h2>Freelance</h2>
          <p>freelancing for about 2 yeards dkfn adslkfnd fl</p>
        </div>
        <div className="quality">
          <i className="fa fa-briefcase" aria-hidden="true"></i>
          <h2>Freelance</h2>
          <p>freelancing for about 2 yeards dkfn adslkfnd fl</p>
        </div>
        <div className="quality">
          <i className="fa fa-briefcase" aria-hidden="true"></i>
          <h2>Freelance</h2>
          <p>freelancing for about 2 yeards dkfn adslkfnd fl</p>
        </div>
      </div>
      <div className="about">
        <div className="me">
          <img src={about} />
          <p>
            I'm a passionate full stack web developer and computer science
            student at Langara college. I want to become a full stack web
            developer
          </p>
        </div>
        <div className="skills">
          <div className="skill">
            <span>Languages : </span> JavaScript, Java, C++
          </div>
          <div className="skill">
            <span>Frameworks/Libraries : </span> React, ExpressJs Gastby, JQuery
          </div>
          <div className="skill">
            <span>Back-end : </span> Node, express
          </div>
          <div className="skill">
            <span>Database : </span> MongoDB, MySQL
          </div>
          <div className="skill">
            <span>Back-end : </span> Node, express
          </div>
          <div className="skill">
            <span>Database : </span> MongoDB, MySQL
          </div>
        </div>
      </div>
    </section>
  );
}
