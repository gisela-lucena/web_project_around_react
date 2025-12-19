// import { useState } from "react";
import "../App.css";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import Popup from "./Main/components/Popup/Popup.jsx";
import EditProfile from "./Main/components/Popup/components/NewCard/EditProfile.jsx";
import NewCard from "./Main/components/Popup/components/NewCard/NewCard.jsx";
import EditAvatar from "./Main/components/Popup/components/NewCard/EditAvatar.jsx";
import ConfirmPopup from "./Main/components/Popup/components/NewCard/ConfirmPopup.jsx";
import ImagePopup from "./Main/components/Popup/components/NewCard/ImagePopup.jsx";
function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
      <Popup />
      <EditProfile />
      <EditAvatar />
      <NewCard />
      <ConfirmPopup />
      <ImagePopup />
    </>
  );
}

export default App;
