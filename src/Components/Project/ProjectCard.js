import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";

function ProjectCard({ img, demoLink, description, title }) {
  return (
    <>
      <img src={img} alt="card-img" className="project__img" />
      <div className="project__data">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>
        <a
          href={demoLink}
          className="button button--flex button--small project__button"
          target="_blank"
          rel="noreferrer"
        >
          View <UilArrowRight className="button__icon" />
        </a>
      </div>
    </>
  );
}

export default ProjectCard;
