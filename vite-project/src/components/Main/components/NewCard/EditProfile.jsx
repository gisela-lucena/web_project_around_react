export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form" noValidate>
      <div className="popup__input-container">
        <input
          className="popup__input popup__input_edit_name"
          name="name"
          placeholder="Nome"
          type="text"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error popup__input-name-error"></span>
      </div>
      <div className="popup__input-container popup__container popup__container_type_image">
        <input
          className="popup__input popup__input_edit_profession"
          name="job"
          placeholder="Sobre Mim"
          type="text"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error popup__input-profession-error"></span>
      </div>
      <button
        className="popup__button popup__button-active popup__button-disabled"
        type="submit"
        data-default-text="Salvar"
      >
        Salvar
      </button>
    </form>
    );
}
