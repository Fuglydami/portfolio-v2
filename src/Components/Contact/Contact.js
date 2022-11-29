import { UilEnvelope, UilMapMarker, UilPhone } from "@iconscout/react-unicons";
import React from "react";
import { Helmet } from "react-helmet-async";
import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact({ contact }) {
  const { phone, email, location } = contact;

  return (
    <>
      <Helmet>
        <title>Damilare Oyedeji - Software Engineer</title>
        <meta
          name="description"
          content="You can contact on these platform; Phone No: +234 70 312 03859, Email: damoye81@gmail.com, LinkedIn: https://www.linkedin.com/in/damilareoyedeji/, twitter: https://twitter.com/blackkolanut, github: https://github.com/Fuglydami"
        />
        <link rel="canonical" href="/#contact" />
      </Helmet>
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
          <div>
            <ContactInfo Icon={UilPhone} title="Call Me" subtitle={phone} />
            <ContactInfo Icon={UilEnvelope} title="Email" subtitle={email} />
            <ContactInfo
              Icon={UilMapMarker}
              title="Location"
              subtitle={location}
            />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default Contact;
