import React from "react";

function ImagePopup ({ card, onClose }) {
  return (
    <div className={`popup popup_place_image ${card}`}>
        <div className="popup__container">
          <button
            aria-label="закрыть просмотр изображения"
            type="button"
            className="popup__close-btn button"
            onClick={onClose}
          ></button>
          <figure className="popup__figure-container">
            <img
              src={card.link}
              alt={card.name}
              className="popup__image"
            />
            <figcaption className="popup__figcaption">{card.name}</figcaption>
          </figure>
        </div>
      </div>
  )
}

export default ImagePopup;
