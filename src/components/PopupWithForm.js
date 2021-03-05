import React from "react";

export default function PopupWithForm(props) {
  return (
    <div className="popup popup_del" className={`popup popup_${props.name}`}>
      <div className="popup__container">
        <button className="popup__close-icon" type="button" aria-label="close"></button>
        <h2 className="popup__heading">Вы уверены?</h2>
        <form className="popup__form" name={props.name} noValidate>
          <button className="popup__save-button" type="submit">Да</button>
          {/* Здесь был модификатор popup__save-button_del, нужно не забыть удалить в css и поменять верстку */}
        </form>
      </div>
    </div>
  );
}
