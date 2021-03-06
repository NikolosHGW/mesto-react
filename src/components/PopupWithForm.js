import React from "react";

export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name}`}>
      <div className="popup__container">
        <button className="popup__close-icon" type="button" aria-label="close"></button>
        <h2 className="popup__heading">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
          <button className="popup__save-button" type="submit">{props.textButton}</button>
        </form>
      </div>
    </div>
  );
}
