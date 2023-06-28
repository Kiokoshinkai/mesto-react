import React from "react";

function ImagePopup () {
  return (
    <div className="popup popup_place_image">
        <div className="popup__container">
          <button
            aria-label="закрыть просмотр изображения"
            type="button"
            className="popup__close-btn button"
          ></button>
          <figure className="popup__figure-container">
            <img
              src="#"
              alt="увеличенное изображение"
              className="popup__image"
            />
            <figcaption className="popup__figcaption"></figcaption>
          </figure>
        </div>
      </div>
  )
}

export default ImagePopup;
