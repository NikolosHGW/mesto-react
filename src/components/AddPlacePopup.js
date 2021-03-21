import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({name, link});
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      textButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__input-text">
        <label className="popup__field">
          <input
            id="card-name-input"
            className="popup__input popup__input_el_card-name"
            placeholder="Название"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error card-name-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            id="img-link-input"
            className="popup__input popup__input_el_img-link"
            placeholder="Ссылка на картинку"
            type="url"
            name="link"
            value={link}
            onChange={handleLinkChange}
            required
          />
          <span className="popup__input-error img-link-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}
