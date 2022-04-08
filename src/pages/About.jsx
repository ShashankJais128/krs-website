import React from "react";
import Aboutlogos from "../components/About/Aboutlogos";
import AboutText from "../components/About/AboutText";
// import Line from "../components/About/Line";

function About() {
  return (
    <div className="text-center ">
      <div className="container flex flex-col items-center md px-52 border-solid border-black  ">
        <Aboutlogos />
        
        <AboutText />
      </div>
    </div>
  );
}

export default About;
