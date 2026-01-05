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

  function handleClosePopup() {
    setPopup(null);
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  return (

    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
