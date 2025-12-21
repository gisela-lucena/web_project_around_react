import avatar from "../../images/avatar.jpg";
import editIcon from "../../images/editButtonVector.svg";
import addIcon from "../../images/addButton.png";
import { useState } from "react";
import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/Popup/components/NewCard/NewCard.jsx";
import EditProfile from "./components/Popup/components/NewCard/EditProfile.jsx";
import EditAvatar from "./components/Popup/components/NewCard/EditAvatar.jsx";


export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };
  // const confirmPopup = { title: "Confirm deletion", children: <ConfirmPopup /> };
  // const imagePopup = { title: "Image preview", children: <ImagePopup /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__picture">
            <img
              className="profile__image"
              src={avatar}
              alt="Jacques Cousteau profile picture"
            />
            <div className="profile__picture-overlay">
              <button
                className="profile__edit-avatar"
                aria-label="Editar avatar"
                type="button"
                onClick={() => handleOpenPopup(editAvatarPopup)}
              >
                <img
                  className="profile__avatar-edit-icon"
                  src={editIcon}
                  alt="Editar avatar"
                />
              </button>
            </div>
          </div>
          <div className="profile__info-container">
            <div className="profile__info">
              <h1 className="profile__title">Jacques Cousteau</h1>
              <button
                className="profile__edit-button"
                aria-label="Editar perfil"
                type="button"
                onClick={() => handleOpenPopup(editProfilePopup)}
              >
                <img
                  className="profile__edit-icon"
                  src={editIcon}
                  alt="Editar perfil"
                />
              </button>
            </div>
            <p className="profile__subtitle">Explorador</p>
          </div>
          <button
            className="profile__add-place"
            aria-label="Adicionar local"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <img
              className="profile__add-icon"
              src={addIcon}
              alt="Adicionar local"
            />
          </button>
        </section>
        <section className="cards">
          <ul className="cards__list"></ul>
        </section>

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
