import React from "react";
import { api } from '../utils/api.js';

export default function Main(props) {
  const [userInfo, setUserInfo] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInfoUser()
      .then(data => {
        setUserInfo({
          userName: data.name,
          userDescription: data.about,
          userAvatar: data.avatar,
        })
      })
      .catch(res => console.log(res));
  }, []);
  React.useEffect(() => {
    api.getInitialCard()
      .then(data => {
        setCards(data);
      })
      .catch(res => console.log(res));
  }, []);

  return (
  <main className="content">
    <section className="profile">
      <div className="profile__container">
        <div className="profile__avatar-cover">
          <img className="profile__avatar" src={userInfo.userAvatar} alt="Аватар"/>
          <button className="profile__avatar-button" type="button" aria-label="edit" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userInfo.userName}</h1>
          <p className="profile__job">{userInfo.userDescription}</p>
          <button className="profile__edit-button" type="button" aria-label="edit" onClick={props.onEditProfile}></button>
        </div>
      </div>
      <button className="profile__add-button" type="button" aria-label="add" onClick={props.onAddPlace}></button>
    </section>

    <section className="elements content__elements">
      {cards.map((card) => (
        <article key={card._id} className="element">
          <button className="element__img-button" type="button"><img className="element__img" src={card.link} alt="загруженная картинка"/></button>
          <button className="element__del-button" type="button" aria-label="delet"></button>
          <div className="element__info">
            <h2 className="element__heading">{card.name}</h2>
            <div className="element__group">
              <button className="element__like-button" type="button" aria-label="like"></button>
              <p className="element__count">{card.likes.length}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  </main>
  );
}
