import React from "react";
import "./About.css";

function AboutInfo({ title, name }) {
  const [first, second] = name.split(" ");

  return (
    <div>
      <span className="about__info-title">{title}</span>
      <span className="about__info-name">
        {first} <br /> {second}
      </span>
    </div>
  );
}

export default AboutInfo;
