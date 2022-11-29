import {
  UilArrowDown,
  UilGithubAlt,
  UilLinkedinAlt,
  UilMessage,
  UilMouseAlt,
  UilTwitterAlt,
} from "@iconscout/react-unicons";
import React from "react";
import { Helmet } from "react-helmet-async";
import { socialLinks } from "../../Utils/data";
import "./Home.css";

function Home({ home }) {
  const { title, subtitle, description } = home;

  return (
    <>
      <Helmet>
        <title>Damilare Oyedeji - Software Engineer</title>
        <meta
          name="description"
          content="Have you seen for a self-motivated and enthusiatic Software Engineer who is passionate about writing clean and structured code? No?"
        />
        <link rel="canonical" href="/#home" />
      </Helmet>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a href={socialLinks.linkedIn} target="_blank" rel="noreferrer">
                <UilLinkedinAlt className="home__social-icon" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                <UilTwitterAlt className="home__social-icon" />
              </a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                <UilGithubAlt className="home__social-icon" />
              </a>
            </div>

            <div className="home__img">
              <svg
                className="home__blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    href="/assets/img/profile.png"
                    x="5"
                    y="38"
                    className="home__blob-img"
                  />
                </g>
              </svg>
            </div>

            <div className="home__data">
              <h1 className="home__title">{title}</h1>
              <h3 className="home__subtitle">{subtitle}</h3>
              <p className="home__description">{description}</p>
              <a href="#contact" className="button button--flex">
                Hire me <UilMessage className="button__icon" />
              </a>
            </div>
          </div>

          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <UilMouseAlt className="home__scroll-mouse" />
              <span className="home__scroll-name">Scroll down</span>
              <UilArrowDown className="home__scroll-arrow" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
