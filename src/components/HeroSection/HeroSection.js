import React from "react";
import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Gursharan Singh</span>
        </h1>
        <h2>I'm a full-stact web-developer</h2>
        <a href="#projects">View Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
