import React, { useEffect } from "react";
import "./App.scss";

import {
  name,
  email,
  resume,
  description,
  aboutme,
  projects
} from "./Info.json";
import NavBar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = React.useState("dark");
  useEffect(() => {
    document.title = name;
  }, []);
  return (
    <div className="container">
      <NavBar theme={theme} setTheme={setTheme} name={name} resume={resume} />
      <HeroSection theme={theme} name={name} description={description} />
      <About theme={theme} aboutme={aboutme} />
      <Projects theme={theme} projects={projects} />
      <Contact theme={theme} email={email} />
      <Footer theme={theme} name={name} />
    </div>
  );
}

export default App;
