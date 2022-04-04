import React from "react";
import { UilTimes } from "@iconscout/react-unicons";

function ExperienceModal({ title, desc, showModal, setShowModal, experience }) {
  return (
    <div
      className={`services__modal ${showModal ? "" : "services__modal-show"}`}
    >
      <div className="services__modal-content">
        <h4 className="services__modal-title">{title}</h4>
        <UilTimes
          className="services__modal-close"
          onClick={() => setShowModal(!showModal)}
        />
        <ul className="services__modal-services grid">
          <li className="services__modal-service">
            <p>{desc}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExperienceModal;
