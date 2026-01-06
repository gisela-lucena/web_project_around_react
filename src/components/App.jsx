import "../App.css";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import CurrentUserContext from "../../src/contexts/CurrentUserContext"
import { useEffect, useState } from "react";
import api from "../utils/api.js";

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
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

  async function handleCardDelete(card) {
    await api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((currentCard) => currentCard._id !== card._id))
      handleClosePopup();
    }).catch((error) => console.error(error));
  }

  async function handleAddPlaceSubmit(card) {
    await api.addNewCard(card.name, card.link).then((newCard) => {
      setCards([newCard, ...cards])
      handleClosePopup();
    }).catch((error) => console.error(error));
  }


  useEffect(() => {
    api.getUser().then((data) => {
      setCurrentUser(data)
    })
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setUserInfo(data.name, data.about).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      }).catch((error) => console.error(error));
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.updateAvatar(data.avatar).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      }).catch((error) => console.error(error));
    })();
  };

  function handleClosePopup() {
    setPopup(null);
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  return (

    <CurrentUserContext.Provider value={{
      currentUser, handleUpdateUser,
      handleUpdateAvatar, handleCardLike,
      handleCardDelete, handleAddPlaceSubmit
    }}>
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
