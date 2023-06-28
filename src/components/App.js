import React from "react";
import Header from "./Header";
import headerLogo from "../images/logo.svg";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  //функция установки имени класса для попапов
  function handleClassName(dataState) {
    return `${dataState ? "popup_opened" : ""}`;
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }

  return (
    <body className="page">
      <Header logo={headerLogo} />
      <Main
        onEditAvatar={() =>
          setIsEditAvatarPopupOpen(true)
        }
        onEditProfile={() =>
          setIsEditProfilePopupOpen(true)
        }
        onAddPlace={() =>
          setIsAddPlacePopupOpen(true)
        }
      />
      <Footer />
      <PopupWithForm
        title={"Редактировать профиль"}
        name={"profile"}
        btnText={"Сохранить"}
        ariaLabel={"сохранить изменения профиля"}
        isOpen={handleClassName(isEditProfilePopupOpen)}
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        title={"Новое место"}
        name={"card"}
        btnText={"Создать"}
        ariaLabel={"cоздать новую карточку"}
        isOpen={handleClassName(isAddPlacePopupOpen)}
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        title={"Обновить аватар"}
        name={"avatar"}
        btnText={"Сохранить"}
        ariaLabel={"изменить аватар"}
        isOpen={handleClassName(isEditAvatarPopupOpen)}
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        title={"Вы уверены?"}
        name={"trash"}
        btnText={"Да"}
        ariaLabel={"удалить карточку"}
        classElement={"popup__form-title_el_title"}
      />
      <ImagePopup />
    </body>
  );
}

export default App;
