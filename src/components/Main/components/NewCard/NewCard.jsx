import { useState, useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

function NewCard() {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const card = { name, link };

    handleAddPlaceSubmit(card).finally(() => {
      setIsLoading(false);
    });
    setName("");
    setLink("");
  };

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="3"
          name="card-name"
          placeholder="Title"
          required
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>

      <button className="button popup__button" type="submit" disabled={isLoading}>
        {isLoading ? "Salvando..." : "Salvar"}
      </button>
    </form>
  );
}

export default NewCard;