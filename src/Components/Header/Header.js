import React, { useState } from "react";
import "./Header.css";
import NavItem from "./NavItem";
import {
  UilEstate,
  UilUser,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilStar,
  UilTimes,
  UilApps,
} from "@iconscout/react-unicons";
import Toggle from "./Toggle";

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Damilare
        </a>
        <div className={`nav__menu ${showNav ? "show-nav" : "hide-nav"}`}>
          <ul className="nav__list grid">
            <NavItem Icon={UilEstate} name="Home" link="#home" />
            <NavItem Icon={UilUser} name="About" link="#about" />
            <NavItem Icon={UilBriefcaseAlt} name="Skills" link="#services" />
            <NavItem Icon={UilScenery} name="Projects" link="#project" />
            <NavItem Icon={UilMessage} name="Contact" link="#contact" />
            <NavItem Icon={UilStar} name="Get a quote" />
          </ul>
          <UilTimes className="nav__close" onClick={() => setShowNav(false)} />
        </div>

        <div className="nav__btns">
          <Toggle />
          <UilApps onClick={() => setShowNav(true)} className="nav__toggle" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
