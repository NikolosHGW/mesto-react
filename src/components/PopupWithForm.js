import React from "react";

export default function PopupWithForm({ name, title, textButton, isOpen, onClose, onSubmit, children }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-icon" type="button" aria-label="close" onClick={onClose}></button>
        <h2 className="popup__heading">{title}</h2>
        <form className="popup__form" name={name} onSubmit={onSubmit} noValidate>
          {children}
          <button className="popup__save-button" type="submit">{textButton}</button>
        </form>
      </div>
    </div>
  );
}
