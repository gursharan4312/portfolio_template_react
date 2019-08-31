import React from "react";
import "./App.scss";
import NavBar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = React.useState("light");
  return (
    <div className="container">
      <NavBar theme={theme} setTheme={setTheme} />
      <HeroSection theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
