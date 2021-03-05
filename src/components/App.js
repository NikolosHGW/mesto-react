import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';

function App() {
  return (
  <div className="body">
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>

    <div className="popup popup_edd">
      <div className="popup__container">
        <button className="popup__close-icon" type="button" aria-label="close"></button>
        <h2 className="popup__heading">Редактировать профиль</h2>
        <form className="popup__form" name="popupForm" noValidate>
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
          <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_add">
      <div className="popup__container">
        <button className="popup__close-icon" type="button" aria-label="close"></button>
        <h2 className="popup__heading">Новое место</h2>
        <form className="popup__form" name="popupAddForm" noValidate>
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
          <button className="popup__save-button" type="submit">Создать</button>
        </form>
      </div>
    </div>
    <div className="popup popup_img">
      <div className="popup-img">
        <img className="popup-img__img" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="Загруженная картинка в большем разрешении"/>
        <p className="popup-img__caption"></p>
        <button className="popup__close-icon" type="button" aria-label="close"></button>
      </div>
    </div>
    <div className="popup popup_del">
      <div className="popup__container">
        <button className="popup__close-icon" type="button" aria-label="close"></button>
        <h2 className="popup__heading">Вы уверены?</h2>
        <form className="popup__form popup__form_del" name="popupDelForm" noValidate>
          <button className="popup__save-button popup__save-button_del" type="submit">Да</button>
        </form>
      </div>
    </div>
    <div className="popup popup_refresh">
      <div className="popup__container">
        <button className="popup__close-icon" type="button" aria-label="close"></button>
        <h2 className="popup__heading">Обновить аватар</h2>
        <form className="popup__form" name="popupRefreshForm" noValidate>
          <fieldset className="popup__input-text">
            <label className="popup__field">
              <input id="avatar-link-input" className="popup__input popup__input_el_avatar-link" placeholder="Ссылка на картинку" type="url" name="link" required/>
              <span className="popup__input-error avatar-link-input-error"></span>
            </label>
          </fieldset>
          <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default App;
