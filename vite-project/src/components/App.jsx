// import { useState } from "react";
import avatar from "../images/avatar.jpg";
import editIcon from "../images/editButtonVector.svg";
import addIcon from "../images/addButton.png";
import "../App.css";
import Header from "./Header/Header.jsx";

function App() {
  return (
    <>
      <div class="page">
        <Header />
        <main class="content">
          <section class="profile">
            <div class="profile__picture">
              <img
                class="profile__image"
                src={avatar}
                alt="Jacques Cousteau profile picture"
              />
              <div class="profile__picture-overlay"></div>
            </div>
            <div class="profile__info-container">
              <div class="profile__info">
                <h1 class="profile__title">Jacques Cousteau</h1>
                <button class="profile__edit-button" aria-label="Editar perfil">
                  <img
                    class="profile__edit-icon"
                    src={editIcon}
                    alt="Editar perfil"
                  />
                </button>
              </div>
              <p class="profile__subtitle">Explorador</p>
            </div>
            <button class="profile__add-place" aria-label="Adicionar local">
              <img
                class="profile__add-icon"
                src={addIcon}
                alt="Adicionar local"
              />
            </button>
          </section>
          <section class="cards">
            <ul class="cards__list"></ul>
          </section>
        </main>
        <footer class="footer">&copy; 2025 Around the U.S.</footer>
      </div>
    </>
  );
}

export default App;
