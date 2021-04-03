import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import logo from '../images/Vector.svg';

export default React.memo(() => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="header">
      {isOpen && (
        <div className="header__login header__login_opened">
          <p className="header__email">Тут будет емыло</p>
          <Link className="header__nav-link" to="/sign-in">Выйти</Link>
        </div>
      )}
      <div className="header__container">
        <a className="header__link" target="_blank" href="#">
          <img className="header__logo" src={logo} alt="логотип Место Россия"/>
        </a>
        <Route exact path="/">
          <div className="header__login">
            <p className="header__email">Тут будет емыло</p>
            <Link className="header__nav-link" to="/sign-in">Выйти</Link>
          </div>
          {isOpen ? (
            <button
              className="header__menu-close-button"
              type="button"
              aria-label="close"
              onClick={() => setIsOpen(false)}
            ></button>
          ) : (
            <button
              className="header__menu-button"
              type="button"
              aria-label="open menu"
              onClick={() => setIsOpen(true)}
            >
              <span className="header__menu-line"></span>
            </button>
          )}
        </Route>
      </div>
    </header>
  );
});
