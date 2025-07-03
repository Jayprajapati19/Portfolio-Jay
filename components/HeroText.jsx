"use client";

import React from "react";
import TypewriterComponent from "typewriter-effect";

const HeroText = () => {
  return (
    <TypewriterComponent
      options={{
        strings: [
          '"Turning thoughts into thriving tech."',
          '"Fueling ideas with clean, creative code."',
          '"Making imagination functional, one build at a time."',
        ],
        autoStart: true,
        loop: true,
        delay: 70,
        deleteSpeed: 40,
      }}
    />
  );
};

export default HeroText;
