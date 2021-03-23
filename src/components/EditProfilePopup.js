import React from "react";
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [info, setInfo] = React.useState({name: '', description: ''});

  const currentUser = React.useContext(CurrentUserContext);

  function handleInfoChange(evt) {
    setInfo({
      ...info,
      [evt.target.name]: evt.target.value
    });
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: info.name,
      about: info.description
    });
  }

  React.useEffect(() => {
    setInfo(prev => currentUser.name && currentUser.about
      ? {name: currentUser.name, description: currentUser.about} : prev);
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
            value={info.name}
            onChange={handleInfoChange}
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
            value={info.description}
            onChange={handleInfoChange}
            type="text"
            name="description"
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
