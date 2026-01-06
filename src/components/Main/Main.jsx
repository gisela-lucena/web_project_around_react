import editIcon from "../../images/editButtonVector.svg";
import addIcon from "../../images/addButton.png";
import { useState, useEffect, useContext } from "react";
import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/NewCard/NewCard.jsx";
import EditProfile from "./components/NewCard/EditProfile.jsx";
import EditAvatar from "./components/NewCard/EditAvatar.jsx";
import Card from "./components/Card/Card.jsx";
import api from "../../utils/api.js"
import CurrentUserContext from "../../contexts/CurrentUserContext";


export default function Main({ popup, onOpenPopup, onClosePopup }) {
  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };
  const { currentUser } = useContext(CurrentUserContext);
  const [cards, setCards] = useState([])

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  async function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;
    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
    await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
  }

  async function handleCardDelete(cardId) {
    await api.deleteCard(cardId).then(() => {
      setCards((state) => state.filter((currentCard) => currentCard._id !== cardId))
    }).catch((error) => console.error(error));
  }


  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__picture">
            <img
              className="profile__image"
              src={currentUser.avatar}
              alt="Jacques Cousteau profile picture"
            />
            <div className="profile__picture-overlay">
              <button
                className="profile__edit-avatar"
                aria-label="Editar avatar"
                type="button"
                onClick={() => onOpenPopup(editAvatarPopup)}
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
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                aria-label="Editar perfil"
                type="button"
                onClick={() => onOpenPopup(editProfilePopup)}
              >
                <img
                  className="profile__edit-icon"
                  src={editIcon}
                  alt="Editar perfil"
                />
              </button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button
            className="profile__add-place"
            aria-label="Adicionar local"
            type="button"
            onClick={() => onOpenPopup(newCardPopup)}
          >
            <img
              className="profile__add-icon"
              src={addIcon}
              alt="Adicionar local"
            />
          </button>
        </section>
        <section className="cards">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onOpenPopup={onOpenPopup}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            ))}
          </ul>
        </section>

        {popup && (
          <Popup title={popup.title}
            onClose={onClosePopup}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
