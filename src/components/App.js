import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getInfoUser()
    .then(data => {
      setCurrentUser({
        name: data.name,
        about: data.about,
        avatar: data.avatar,
        _id: data._id
      });
    })
    .catch(res => console.log(res));
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }
  function handleUpdateUser({ name, about }) {
    api.setInfoUser(name, about)
      .then(res => {
        setCurrentUser({
          ...currentUser,
          'name': res.name,
          'about': res.about
        });
        closeAllPopups();
      })
      .catch(res => console.log(res));
  }
  function handleUpdateAvatar({ avatar }) {
    api.changeAvatar(avatar)
      .then(res => {
        setCurrentUser({
          ...currentUser,
          'avatar': res.avatar,
        });
        closeAllPopups();
      })
      .catch(res => console.log(res));
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
    </div>

    <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      onUpdateUser={handleUpdateUser}
    />

    <PopupWithForm name="add" title="Новое место"
     textButton="Создать" isOpen={isAddPlacePopupOpen}
     onClose={closeAllPopups}>
      <fieldset className="popup__input-text">
        <label className="popup__field">
          <input id="card-name-input" className="popup__input popup__input_el_card-name" placeholder="Название" type="text" name="name" required minLength="2" maxLength="30"/>
          <span className="popup__input-error card-name-input-error"></span>
        </label>
        <label className="popup__field">
          <input id="img-link-input" className="popup__input popup__input_el_img-link" placeholder="Ссылка на картинку" type="url" name="link" required/>
          <span className="popup__input-error img-link-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>

    <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    <PopupWithForm name="del" title="Вы уверены?" textButton="Да" />

    <EditAvatarPopup
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      onUpdateAvatar={handleUpdateAvatar}
    />

  </CurrentUserContext.Provider>
  );
}

export default App;
