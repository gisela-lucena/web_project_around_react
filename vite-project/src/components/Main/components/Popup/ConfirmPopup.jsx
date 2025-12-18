export default function ConfirmPopup() {
  return (
    <> <form class="popup__form" id="add-card-confirm-form" novalidate>
          <button
            class="popup__button popup__confirm-button"
            type="submit"
            data-default-text="Sim"
          >
            Sim
          </button>
        </form>
    </>);
}
