import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="card">
      <button
        name="trash"
        type="button"
        className="card__trash button"
      ></button>
      <img
        src={card.link}
        alt={`${card.name}`}
        className="card__image"
        onClick={handleClick}
      />
      <div className="card__form">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button name="like" type="button" className="card__like"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
