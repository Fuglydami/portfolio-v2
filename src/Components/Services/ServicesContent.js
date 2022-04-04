import React, { useState } from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import ServicesModal from "./ServicesModal";

function ServicesContent({ Icon, title, services }) {
  const [showModal, setShowModal] = useState(false);

  const [first, second] = title.split(" ");
  return (
    <div className="services__content">
      <div>
        <Icon className="services__icon" />
        <h3 className="services__title">
          {first} <br /> {second}
        </h3>
      </div>

      <span className="button button--flex button--small button--link services__button" onClick={() => setShowModal(true)}>
        View More <UilArrowRight className="button__icon" />
      </span>

      {showModal && <ServicesModal title={title} setShowModal={setShowModal} showModal services={services} />}
    </div>
  );
}

export default ServicesContent;
