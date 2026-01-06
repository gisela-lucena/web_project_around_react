export default function ConfirmPopup({ onConfirm }) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirm();
  }
  return (

    <form className="popup__form" id="add-card-confirm-form"
      onSubmit={handleSubmit}>
      <button
        className="popup__button popup__confirm-button"
        type="submit"
        data-default-text="Sim"
        onClick={onConfirm}
      >
        Sim
      </button>
    </form>
  );
}
