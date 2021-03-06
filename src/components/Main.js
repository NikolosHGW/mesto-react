import React from "react";
import avatar from '../images/image.jpg';

export default function Main(props) {
  return (
  <main className="content">
    <section className="profile">
      <div className="profile__container">
        <div className="profile__avatar-cover">
          <img className="profile__avatar" src={avatar} alt="Аватар"/>
          <button className="profile__avatar-button" type="button" aria-label="edit" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <p className="profile__job">Исследователь океана</p>
          <button className="profile__edit-button" type="button" aria-label="edit" onClick={props.onEditProfile}></button>
        </div>
      </div>
      <button className="profile__add-button" type="button" aria-label="add" onClick={props.onAddPlace}></button>
    </section>

    <section className="elements content__elements">
      <template className="elements__template" id="element-template">
        <article className="element">
          <button className="element__img-button" type="button"><img className="element__img" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="загруженная картинка"/></button>
          <button className="element__del-button" type="button" aria-label="delet"></button>
          <div className="element__info">
            <h2 className="element__heading"></h2>
            <div className="element__group">
              <button className="element__like-button" type="button" aria-label="like"></button>
              <p className="element__count">0</p>
            </div>
          </div>
        </article>
      </template>
    </section>
  </main>
  );
}
