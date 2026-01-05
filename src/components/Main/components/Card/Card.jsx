import ImagePopup from "../../components/NewCard/ImagePopup.jsx";

export default function Card({ card, handleOpenPopup, onCardLike, onCardDelete }) {
  const { name, link, isLiked } = card;
  const imagePopup = { title: null, children: <ImagePopup card={card} /> };
  const cardLikeButtonClassName = `card__like-button ${isLiked ? 'active' : ''
    }`;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imagePopup)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-icon"
        type="button"
        onClick={() => onCardDelete(card._id)}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => onCardLike(card)}
        />
      </div>
    </li>
  );
}
