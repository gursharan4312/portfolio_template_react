import React from "react";
import "./About.scss";
export default function About(props) {
  const { theme, aboutme } = props;
  return (
    <section
      id="aboutme"
      style={{
        background: theme === "dark" ? "#484f61" : "#eceff1",
        color: theme === "dark" ? "#fff" : "#000"
      }}
    >
      <h1>
        <u>About me</u>
      </h1>
      <div className="top-qualities">
        {aboutme.qualities.map((quality, i) => {
          return (
            <div className="quality" key={i}>
              <i className={`fa fa-${quality.icon}`} aria-hidden="true"></i>
              <h2>{quality.heading}</h2>
              <p>{quality.description}</p>
            </div>
          );
        })}
      </div>
      <div className="about">
        <div className="me">
          <img
            src={`${process.env.PUBLIC_URL}/assests/images/${aboutme.image}`}
            alt="self"
          />
          <p>{aboutme.description}</p>
        </div>
        <div className="skills">
          {aboutme.skills.map((skill, i) => {
            return (
              <div className="skill" key={i}>
                <span>{skill.category} : </span> {skill.values.toString()}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
