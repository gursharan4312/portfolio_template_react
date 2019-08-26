import React from "react";
import "./HeroSection.scss";
import Particles from "react-particles-js";

export default function HeroSection() {
  const particles = {
    particles: {
      number: {
        value: 500
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
    <div className="hero-section">
      <Particles width="100%" height="90vh" params={particles} />
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
