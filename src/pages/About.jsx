import React from "react";
import Aboutlogos from "../components/About/Aboutlogos";
import AboutText from "../components/About/AboutText";
import Line from "../components/About/Line";

function About() {
  return (
    <div className="text-center ">
      <div className="container flex flex-col items-center md px-52 border-2 border-black  ">
        <Aboutlogos />
        <h2 className="font-serif ">About KIIT Robotics Society</h2>
        <Line color="black" />
        <AboutText />
      </div>
    </div>
  );
}

export default About;
