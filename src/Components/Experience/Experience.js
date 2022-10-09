import { UilAirplay } from "@iconscout/react-unicons";
import React from "react";
import data from "../../Utils/data";
import "./Experience.css";
import ExperienceContent from "./ExperienceContent";

function Experience({ experience }) {
  return (
    <section className="services section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">Companies i have worked for</span>

      <div className="services__container container grid">
        <ExperienceContent
          Icon={UilAirplay}
          desc={data.experience.Companies[0].desc}
          title="Interswitch Group - Software Engineer"
          experience={experience}
        />
        <ExperienceContent
          Icon={UilAirplay}
          desc={data.experience.Companies[1].desc}
          title="FirstBank of Nigeria - Software Developer"
          experience={experience}
        />
        <ExperienceContent
          Icon={UilAirplay}
          desc={data.experience.Companies[2].desc}
          title="Digiscript Tech Solutions - Frontend Engineer"
          experience={experience}
        />
        <ExperienceContent
          Icon={UilAirplay}
          desc={data.experience.Companies[3].desc}
          title="Netpacks Limited - Frontend Engineer"
          experience={experience}
        />
      </div>
    </section>
  );
}

export default Experience;
