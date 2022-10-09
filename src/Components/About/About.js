import { UilDownloadAlt } from "@iconscout/react-unicons";
import React from "react";
import "./About.css";
import AboutInfo from "./AboutInfo";

function About({ about }) {
  const { description } = about;

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src="/assets/img/about.png" alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">{description}</p>

          <div className="about__info">
            <AboutInfo title="2" name="Years experince" />
            <AboutInfo title="5+" name="Completed projects" />
            <AboutInfo title="3" name="Companies worked" />
          </div>

          <div className="about__buttons">
            <a
              href="https://drive.google.com/file/d/1En6-Ujn4g2IvUKT1-iKkKmCKh33So6gb/view?usp=sharing"
              className="button button--flex"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
              <UilDownloadAlt />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
