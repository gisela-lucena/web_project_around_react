import "../App.css";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import ImagePopup from "./Main/components/NewCard/ImagePopup.jsx";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <ImagePopup />
      </div>
    </>
  );
}

export default App;
