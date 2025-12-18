import avatar from "../../images/avatar.jpg";
import editIcon from "../../images/editButtonVector.svg";
import addIcon from "../../images/addButton.png";

function Main() {
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
            <div className="profile__picture-overlay"></div>
          </div>
          <div className="profile__info-container">
            <div className="profile__info">
              <h1 className="profile__title">Jacques Cousteau</h1>
              <button className="profile__edit-button" aria-label="Editar perfil">
                <img
                  className="profile__edit-icon"
                  src={editIcon}
                  alt="Editar perfil"
                />
              </button>
            </div>
            <p className="profile__subtitle">Explorador</p>
          </div>
          <button className="profile__add-place" aria-label="Adicionar local">
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
      </main>
    </>
  );
}
export default Main;
