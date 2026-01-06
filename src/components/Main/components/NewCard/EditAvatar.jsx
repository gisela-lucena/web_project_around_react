import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const avatarRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form className="popup__form" id="edit-avatar-form" noValidate onSubmit={handleSubmit}>
      <div className="popup__input-container">
        <input
          className="popup__input popup__input_edit_avatar"
          name="avatar"
          placeholder="Link de imagem"
          type="url"
          required
          ref={avatarRef}
        />
        <span className="popup__input-error popup__input-url-error"></span>
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
