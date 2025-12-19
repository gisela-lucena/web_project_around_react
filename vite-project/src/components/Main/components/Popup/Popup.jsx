import closeButton from "../../../../../src/images/addButton.png"

export default function Popup(props) {
  //children é o conteúdo de popup
  const { onClose, title, children } = props;

  return (
    <div className="popup">
      <div className="popup__content">
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        ><img
              className="popup__close-icon"
              src={closeButton}
              alt="Fechar
          popup"
          />
        </button>
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}