import React from "react";
import Card from './Card.js';
import { api } from '../utils/api.js';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then(newCard => {
        setCards(prevState => prevState.map(c => c._id === card._id ? newCard : c));
      })
      .catch(res => console.log(res));
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(prevState => prevState.filter(c => c._id !== card._id));
      })
      .catch(res => console.log(res));
  }

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
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"/>
          <button className="profile__avatar-button" type="button" aria-label="edit" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__job">{currentUser.about}</p>
          <button className="profile__edit-button" type="button" aria-label="edit" onClick={onEditProfile}></button>
        </div>
      </div>
      <button className="profile__add-button" type="button" aria-label="add" onClick={onAddPlace}></button>
    </section>

    <section className="elements content__elements">
      {cards.map((card) => (
        <Card
          key={card._id}
          card={card}
          onCardClick={onCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
      ))}
    </section>
  </main>
  );
}
