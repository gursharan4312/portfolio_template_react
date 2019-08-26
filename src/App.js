import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="container">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
