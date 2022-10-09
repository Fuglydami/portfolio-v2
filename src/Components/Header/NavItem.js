import React from "react";
import Quote from "../Quote/Quote";
import './Header.css'

function NavItem({ link, Icon, name }) {
  return (
    <li className="nav__item">
      {link ? <a href={link} className="nav__link">
        <Icon className="nav__icon" /> {name}
      </a> : <Quote name={name} Icon={Icon} />}
    </li>
  );
}

export default NavItem;
