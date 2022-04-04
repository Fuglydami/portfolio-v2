import React from "react";
import "./Footer.css";
import {
  UilGithub,
  UilTwitterAlt,
  UilLinkedinAlt,
} from "@iconscout/react-unicons";
import { socialLinks } from "../../Utils/data";

function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Damilare Oyedeji</h1>
            <span className="footer__subtitle">Software Developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#project" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              <UilGithub className="footer__social" />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
              <UilTwitterAlt className="footer__social" />
            </a>
            <a href={socialLinks.linkedIn} target="_blank" rel="noreferrer">
              <UilLinkedinAlt className="footer__social" />
            </a>
          </div>
        </div>

        <p className="footer__copy">
          Copyright &#169; {date.getFullYear()} All rights reserved | Damilare
          Oyedeji
        </p>
      </div>
    </footer>
  );
}

export default Footer;
