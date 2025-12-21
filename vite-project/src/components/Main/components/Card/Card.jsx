import Main from "../../Main.jsx";
import imagePopup from "../../components/NewCard/ImagePopup.jsx";
import { useState } from "react";


export default function Card({ card, handleOpenPopup }) {
  const { name, link, isLiked } = card;
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

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
