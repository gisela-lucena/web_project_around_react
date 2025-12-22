import ImagePopup from "../../components/NewCard/ImagePopup.jsx";

export default function Card({ card, handleOpenPopup }) {
  const { name, link, isLiked } = card;
  const imagePopup = { title: null, children: <ImagePopup card={card} /> };

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
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className="card__like-icon"
        />
        {isLiked ? "liked" : "not liked"}
      </div>
    </li>
  );
}
