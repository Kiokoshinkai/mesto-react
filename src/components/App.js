import React from "react";
import Header from "./Header";
import headerLogo from "../images/logo.svg";
import Main from "./Main"
import Footer from "./Footer";

function App() {
  return (
    <body className="page">
      <Header
        logo = {headerLogo}
      />
      <Main
        handleEditAvatarClick={() => document.querySelector('.popup_place_avatar')
        .classList.add('popup_opened')
      }
        handleEditProfileClick={() => document.querySelector('.popup_place_profile')
        .classList.add('popup_opened')
      }
        handleAddPlaceClick={() => document.querySelector('.popup_place_card')
        .classList.add('popup_opened')
      }
      />
      <Footer />

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

    </body>
  );
}

export default App;
