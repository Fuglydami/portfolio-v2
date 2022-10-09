import React from "react";
import { UilTimes, UilCheckCircle } from "@iconscout/react-unicons";

function ServicesModal({ title, showModal, setShowModal, services }) {
  const [first, second] = title.split(" ");
  const { frontend, backend } = services;

  return (
    <div
      className={`services__modal ${showModal ? "" : "services__modal-show"}`}
    >
      <div className="services__modal-content">
        <h4 className="services__modal-title">
          {first} <br /> {second}
        </h4>
        <UilTimes
          className="services__modal-close"
          onClick={() => setShowModal(!showModal)}
        />

        <ul className="services__modal-services grid">
          {first === "Frontend"
            ? frontend.map((item) => {
                const { id, desc } = item;
                return (
                  <li className="services__modal-service" key={id}>
                    <UilCheckCircle className="services__modal-icon" />
                    <p>{desc}</p>
                  </li>
                );
              })
            : backend.map((item) => {
                const { id, desc } = item;
                return (
                  <li className="services__modal-service" key={id}>
                    <UilCheckCircle className="services__modal-icon" />
                    <p>{desc}</p>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}

export default ServicesModal;
