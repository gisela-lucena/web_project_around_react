export default function EditAvatar() {
  return (
      <form className="popup__form" id="edit-avatar-form" noValidate>
        <div className="popup__input-container">
          <input
            className="popup__input popup__input_edit_avatar"
            name="avatar"
            placeholder="Link de imagem"
            type="url"
            required
          />
          <span className="popup__input-error popup__input-url-error"></span>
        </div>
        <button
          disabled
          className="popup__button popup__button-active popup__button-disabled"
          type="submit"
          data-default-text="Salvar"
        >
          Salvar
        </button>
      </form>
  );
}
