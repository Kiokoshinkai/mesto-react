import React from "react";
import api from "../utils/api";

function Main({ onEditAvatar, onEditProfile, onAddPlace, children }) {
  //состояния пользовательских данных
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  //первичная установка данных пользователя
  React.useEffect(() => {
    api
      .getUserData()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, "");

  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__avatar-btn" onClick={onEditAvatar}>
          <img
            src={userAvatar}
            alt="фото пользователя"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__status">{userDescription}</p>
          <button
            aria-label="редактировать профиль"
            type="button"
            className="profile__edit-button button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          aria-label="добавить место"
          type="button"
          className="profile__add-button button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section
        aria-label="Фото и названия мест куда можно поехать"
        className="elements content__elements"
      >
        {children}
      </section>
    </main>
  );
}

export default Main;
