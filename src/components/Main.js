import React from "react";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__avatar-btn" onClick={onEditAvatar}>
          <img src="#" alt="фото пользователя" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <p className="profile__status"></p>
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
        <template className="card-template">
          <article className="card">
            <button
              name="trash"
              type="button"
              className="card__trash button"
            ></button>
            <img src="#" alt="место" className="card__image" />
            <div className="card__form">
              <h2 className="card__title"></h2>
              <div className="card__like-container">
                <button
                  name="like"
                  type="button"
                  className="card__like"
                ></button>
                <p className="card__like-counter">0</p>
              </div>
            </div>
          </article>
        </template>
      </section>
    </main>
  );
}

export default Main;
