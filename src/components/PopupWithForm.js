import React from "react";

function PopupWithForm({ title, name, btnText, ariaLabel, classElement, isOpen, onClose, children }) {
  return (
      <div className={`popup popup_place_${name} ${isOpen}`}>
        <div className="popup__container">
          <button
            aria-label="закрыть"
            type="button"
            className="popup__close-btn button"
            onClick={onClose}
          ></button>
          <form
            name={name}
            className={`popup__form popup__form_el_${name}`}
            novalidate
          >
            <h2 className={`popup__form-title ${classElement}`}>
              {title}
            </h2>
            {children}
            <button
              aria-label={ariaLabel}
              type="submit"
              className={`popup__save-button popup__save-button_place_${name}`}
            >
              {btnText}
            </button>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;
