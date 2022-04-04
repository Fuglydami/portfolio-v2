import React from "react";
import { UilCheckCircle } from "@iconscout/react-unicons";

function ContactModal({sent, setSent}) {
  return (
    <div className={`contact__modal`}>
      <div className="contact__modal-content">
        <div className="contact__modal-title">
          <UilCheckCircle className="contact__modal-icon"/> 
          <h1 className="contact__modal-name">Message Sent</h1>
        </div>
        <div className="contact__modal-button">
          <button className="button" onClick={() => setSent(false)}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
