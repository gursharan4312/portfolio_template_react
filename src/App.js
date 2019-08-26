import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="container">
      <NavBar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
