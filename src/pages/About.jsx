import React from "react";
import Aboutlogos from "./Aboutlogos";
import AboutText from "./AboutText";

function About() {
  const Line = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 3,
        width: 300
      }}
    />
  );
  return (
    <div className="text-center">
      <div className="container flex flex-col justify-center md mx-auto px-4 border-2 ">
        <Aboutlogos />
        <h2 className="font-serif ">About KIIT Robotics Society</h2>
        <Line color="black" />
        <AboutText />
      </div>
    </div>
  );
}

export default About;
