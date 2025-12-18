export default function AddCard() {
  return (
    <> <form class="popup__form" id="add-card-form" novalidate>
      <div
        class="popup__input-container popup__container popup__container_type_image"
      >
        <input
          class="popup__input popup__input_edit_title"
          name="name"
          placeholder="Titulo"
          type="text"
          required
          minlength="2"
          maxlength="30"
        />
        <span class="popup__input-error popup__input-title-error"></span>
      </div>
      <div
        class="popup__input-container popup__container popup__container_type_image"
      >
        <input
          class="popup__input popup__input_edit_link"
          name="link"
          placeholder="Link de imagem"
          type="url"
          required
        />
        <span class="popup__input-error popup__input-url-error"></span>
      </div>
      <button
        disabled
        class="popup__button popup__button-addplace"
        type="submit"
        data-default-text="Criar"
      >
        Criar
      </button>
    </form>
    </>);
}
