import React, { useState } from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import ExperienceModal from "./ExperienceModal";

function ExperienceContent({ Icon, title, desc, experience }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="services__content">
      <div>
        <Icon className="services__icon" />
        <h3 className="services__title">{title}</h3>
      </div>

      <span
        className="button button--flex button--small button--link services__button"
        onClick={() => setShowModal(true)}
      >
        View More <UilArrowRight className="button__icon" />
      </span>

      {showModal && (
        <ExperienceModal
          title={title}
          desc={desc}
          setShowModal={setShowModal}
          showModal
          experience={experience}
        />
      )}
    </div>
  );
}

export default ExperienceContent;
