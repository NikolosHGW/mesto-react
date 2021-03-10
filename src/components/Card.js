import React from "react";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <button className="element__img-button" type="button" onClick={handleClick}>
        <img className="element__img" src={props.card.link} alt={`загруженная картинка: ${props.card.name}`}/>
      </button>
      <button className="element__del-button" type="button" aria-label="delete"></button>
      <div className="element__info">
        <h2 className="element__heading">{props.card.name}</h2>
        <div className="element__group">
          <button className="element__like-button" type="button" aria-label="like"></button>
          <p className="element__count">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
