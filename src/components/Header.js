import React from "react";
import logo from '../images/Vector.svg';

export default function Header() {
  return (
    <header className="header page__header">
      <a className="header__link" target="_blank" href="#">
        <img className="header__logo" src={logo} alt="логотип Место Россия"/>
      </a>
    </header>
  );
}
