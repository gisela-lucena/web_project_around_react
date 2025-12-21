export default function ConfirmPopup() {
  return (

      <form className="popup__form" id="add-card-confirm-form" noValidate>
        <button
          className="popup__button popup__confirm-button"
          type="submit"
          data-default-text="Sim"
        >
          Sim
        </button>
      </form>
  );
}
