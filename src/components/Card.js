import React from "react";

export default function Card(props) {
  return (
    <article className="element">
      <button className="element__img-button" type="button"><img className="element__img" src={props.card.link} alt="загруженная картинка"/></button>
      <button className="element__del-button" type="button" aria-label="delet"></button>
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
