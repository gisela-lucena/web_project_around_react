import "../App.css";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState } from "react";
import ImagePopup from "./Main/components/NewCard/ImagePopup.jsx";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleOpenPopup(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setSelectedCard(null);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main handleOpenPopup={handleOpenPopup} />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
