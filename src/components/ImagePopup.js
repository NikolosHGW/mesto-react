import React from "react";

export default function ImagePopup(props) {
  return (
    <div className={`popup popup_img ${props.card && 'popup_opened'}`}>
      <div className="popup-img">
        <img className="popup-img__img" src={props.card.link} alt={`Загруженная картинка в большем разрешении: ${props.card.name}`}/>
        <p className="popup-img__caption">{props.card.name}</p>
        <button className="popup__close-icon" type="button" aria-label="close" onClick={props.onClose}></button>
      </div>
    </div>
  );
}
