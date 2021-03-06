import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import ImagePopup from '../components/ImagePopup.js';
import PopupWithForm from '../components/PopupWithForm.js';

function App() {
  return (
  <div className="body">
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
    </div>

    <PopupWithForm name="edd"
    title="Редактировать профиль" textButton="Сохранить">
      <fieldset className="popup__input-text">
        <label className="popup__field">
          <input id="name-input" className="popup__input popup__input_el_name" type="text" name="name" required minLength="2" maxLength="40"/>
          <span className="popup__input-error name-input-error"></span>
        </label>
        <label className="popup__field">
          <input id="job-input" className="popup__input popup__input_el_job" type="text" name="job" required minLength="2" maxLength="200"/>
          <span className="popup__input-error job-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>

    <PopupWithForm name="add"
    title="Новое место" textButton="Создать">
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

    <ImagePopup />

    <PopupWithForm name="del" title="Вы уверены?" textButton="Да" />

    <PopupWithForm name="refresh"
    title="Обновить аватар" textButton="Сохранить">
      <fieldset className="popup__input-text">
        <label className="popup__field">
          <input id="avatar-link-input" className="popup__input popup__input_el_avatar-link" placeholder="Ссылка на картинку" type="url" name="link" required/>
          <span className="popup__input-error avatar-link-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>

  </div>
  );
}

function handleEditAvatarClick() {
  const popupAvatar = document.querySelector('.popup_refresh');
  popupAvatar.classList.add('popup_opened');
}

function handleEditProfileClick() {
  const popupEdit = document.querySelector('.popup_edd');
  popupEdit.classList.add('popup_opened');
}

function handleAddPlaceClick() {
  const popupAdd = document.querySelector('.popup_add');
  popupAdd.classList.add('popup_opened');
}

export default App;
