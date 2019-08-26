import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/Navbar/Navbar";
import About from "./components/About/About";
function App() {
  return (
    <div className="container">
      <NavBar />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
