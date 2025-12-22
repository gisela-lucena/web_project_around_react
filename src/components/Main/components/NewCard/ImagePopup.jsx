export default function ImagePopup(props) {
  const { card } = props;

  return (
    <div className="popup__image-container">
      <img
        className="popup__image"
        src={card?.link}
        alt={card?.name || "Imagem do card"}
      />
      <p className="popup__caption">{card?.name}</p>
    </div>
  );
}
