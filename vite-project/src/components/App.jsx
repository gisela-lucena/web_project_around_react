// import { useState } from "react";
import "../App.css";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import Popup from "./Main/components/Popup/Popup.jsx";
import EditProfile from "./Main/components/Popup/EditProfile.jsx";
import AddCard from "./Main/components/Popup/AddCard.jsx";
import EditAvatar from "./Main/components/Popup/EditAvatar.jsx";
import ConfirmPopup from "./Main/components/Popup/ConfirmPopup.jsx";
import ImagePopup from "./Main/components/Popup/ImagePopup";
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
      <AddCard />
      <ConfirmPopup />
      <ImagePopup />
    </>
  );
}

export default App;
