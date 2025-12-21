import Popup from "../../components/Popup/Popup";

function ImagePopup({ card, onClose }) {
  return (
    <Popup onClose={onClose}>
      {card && (
        <>
          <img
            className="popup__image"
            src={card.link}
            alt={card.name}
          />
          <p className="popup__caption">{card.name}</p>
        </>
      )}
    </Popup>
  );
}

export default ImagePopup;
