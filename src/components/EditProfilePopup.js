import React from "react";
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }
  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description
    });
  }

  React.useEffect(() => {
    setName(prev => currentUser.name ? currentUser.name : prev);
    setDescription(prev => currentUser.about ? currentUser.about : prev);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edd"
      title="Редактировать профиль"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__input-text">
        <label className="popup__field">
          <input
            id="name-input"
            className="popup__input popup__input_el_name"
            value={name}
            onChange={handleChangeName}
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error name-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            id="job-input"
            className="popup__input popup__input_el_job"
            value={description}
            onChange={handleChangeDescription}
            type="text"
            name="job"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error job-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}
