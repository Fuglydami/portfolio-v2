import React from "react";
import ContactInfo from "./ContactInfo";
import "./Contact.css";
import { UilPhone, UilEnvelope, UilMapMarker } from "@iconscout/react-unicons";
import ContactForm from "./ContactForm";

function Contact({contact}) {
  const {phone, email, location} = contact

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <ContactInfo
            Icon={UilPhone}
            title="Call Me"
            subtitle={phone}
          />
          <ContactInfo
            Icon={UilEnvelope}
            title="Email"
            subtitle={email}
          />
          <ContactInfo
            Icon={UilMapMarker}
            title="Location"
            subtitle={location}
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
