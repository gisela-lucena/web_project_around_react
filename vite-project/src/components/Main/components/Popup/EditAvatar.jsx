export default function EditAvatar() {
  return (
    <> <form class="popup__form" id="edit-avatar-form" novalidate>
          <div class="popup__input-container">
            <input
              class="popup__input popup__input_edit_avatar"
              name="avatar"
              placeholder="Link de imagem"
              type="url"
              required
            />
            <span class="popup__input-error popup__input-url-error"></span>
          </div>
          <button
            disabled
            class="popup__button popup__button-active popup__button-disabled"
            type="submit"
            data-default-text="Salvar"
          >
            Salvar
          </button>
        </form>
    </>);
}
