import React from "react";
import "../App.css";
import "./HeroSection.css";
import CustomPieChart from "./PieChart";

function HeroSection({setMood}) {
  return (
    <div className="hero-container">
      <video src="/videos/background.mp4" autoplay loop muted />
      <div className="image-container">
        <CustomPieChart setMood = {setMood}/>
      </div>
    </div>
  );
}

export default HeroSection;
