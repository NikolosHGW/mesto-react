import React from "react";

export default function ImagePopup() {
  return (
    <div className="popup popup_img">
      <div className="popup-img">
        <img className="popup-img__img" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="Загруженная картинка в большем разрешении"/>
        <p className="popup-img__caption"></p>
        <button className="popup__close-icon" type="button" aria-label="close"></button>
      </div>
    </div>
  );
}
