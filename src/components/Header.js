import React from "react";
import { Route } from "react-router";
import logo from '../images/Vector.svg';
import LogHeader from "./LogHeader";

export default React.memo(({ email }) => {
  console.log('Я здесь из Headr! Я должен вызываться не смотря на memo!');
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLoggOut = React.useCallback(() => {
    localStorage.removeItem('token');
    setIsOpen(false);
  }, []);

  return (
    <header className="header">
      {isOpen && (
        <LogHeader
          openedSelector=" header__login_opened"
          email={email}
          onLoggOut={handleLoggOut}
        />
      )}
      <div className="header__container">
        <a className="header__link" target="_blank" href="#">
          <img className="header__logo" src={logo} alt="логотип Место Россия"/>
        </a>
        <Route exact path="/">
          <LogHeader
            openedSelector=""
            email={email}
            onLoggOut={handleLoggOut}
          />
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
