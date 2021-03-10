import React from "react";
import Card from './Card.js';
import { api } from '../utils/api.js';

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
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
          <button className="profile__avatar-button" type="button" aria-label="edit" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userInfo.userName}</h1>
          <p className="profile__job">{userInfo.userDescription}</p>
          <button className="profile__edit-button" type="button" aria-label="edit" onClick={onEditProfile}></button>
        </div>
      </div>
      <button className="profile__add-button" type="button" aria-label="add" onClick={onAddPlace}></button>
    </section>

    <section className="elements content__elements">
      {cards.map((card) => (
        <Card key={card._id} card={card} onCardClick={onCardClick} />
      ))}
    </section>
  </main>
  );
}
