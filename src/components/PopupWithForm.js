import React from "react";

function PopupWithForm () {
  return (
    <>
    <div className="popup popup_place_profile">
    <div className="popup__container">
      <button
        aria-label="закрыть редактор профиля"
        type="button"
        className="popup__close-btn button"
      ></button>
      <form
        name="edit-profile"
        className="popup__form popup__form_el_profile"
        novalidate
      >
        <h2 className="popup__form-title">Редактировать профиль</h2>
        <input
          id="name-input"
          name="name"
          type="text"
          placeholder="Имя"
          required
          className="popup__form-item popup__form-item_el_name"
          minlength="2"
          maxlength="40"
        />
        <span className="name-input-error popup__form-error">
          Вы пропустили это поле.
        </span>
        <input
          id="status-input"
          name="about"
          type="text"
          placeholder="О себе"
          required
          className="popup__form-item popup__form-item_el_status"
          minlength="2"
          maxlength="200"
        />
        <span className="status-input-error popup__form-error">
          Вы пропустили это поле.
        </span>
        <button
          aria-label="сохранить изменения профиля"
          type="submit"
          className="popup__save-button popup__save-button_place_profile"
        >
          Сохранить
        </button>
      </form>
    </div>
    </div>


    <div className="popup popup_place_card">
    <div className="popup__container">
      <button
        aria-label="закрыть редактор карточек"
        type="button"
        className="popup__close-btn button"
      ></button>
      <form
        name="add-card"
        className="popup__form popup__form_el_card"
        novalidate
      >
        <h2 className="popup__form-title">Новое место</h2>
        <input
          id="place-name"
          name="name"
          type="text"
          placeholder="Название"
          required
          className="popup__form-item popup__form-item_el_place-name"
          minlength="2"
          maxlength="30"
        />
        <span className="place-name-error popup__form-error">
          Вы пропустили это поле.
        </span>
        <input
          id="place-link"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
          className="popup__form-item popup__form-item_el_place-link"
        />
        <span className="place-link-error popup__form-error">
          Введите адрес сайта.
        </span>
        <button
          aria-label="Создать новую карточку"
          type="submit"
          className="popup__save-button popup__save-button_place_card"
        >
          Создать
        </button>
      </form>
    </div>
    </div>


    <div className="popup popup_place_avatar">
    <div className="popup__container">
      <button
        aria-label="закрыть редактор аватара"
        type="button"
        className="popup__close-btn button"
      ></button>
      <form
        name="change-avatar"
        className="popup__form popup__form_el_avatar"
        novalidate
      >
        <h2 className="popup__form-title">Обновить аватар</h2>
        <input
          id="place-avatar"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
          className="popup__form-item popup__form-item_el_avatar-link"
        />
        <span className="place-avatar-error popup__form-error">
          Введите адрес сайта.
        </span>
        <button
          aria-label="Изменить аватар"
          type="submit"
          className="popup__save-button popup__save-button_place_avatar"
        >
          Сохранить
        </button>
      </form>
    </div>
    </div>


    <div className="popup popup_place_trash">
    <div className="popup__container">
      <button
        aria-label="закрыть удаление карточки"
        type="button"
        className="popup__close-btn button"
      ></button>
      <form
        name="delete-card"
        className="popup__form popup__form_el_trash"
        novalidate
      >
        <h2 className="popup__form-title popup__form-title_el_title">
          Вы уверены?
        </h2>
        <button
          aria-label="удалить карточку"
          type="submit"
          className="popup__save-button popup__save-button_place_trash"
        >
          Да
        </button>
      </form>
    </div>
    </div>

    </>
  )
}

export default PopupWithForm;