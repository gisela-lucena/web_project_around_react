import { useState, useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

function EditProfile() {
  const userContext = useContext(CurrentUserContext); // Obtém o objeto de usuário atual
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name); // Adicione variável de estado para nome
  const [description, setDescription] = useState(currentUser.about); // Adicione variável de estado para descrição

  const handleNameChange = (event) => {
    setName(event.target.value); // Atualiza o nome (name) quando a entrada for alterada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Atualiza a descrição (description) quando a entrada for alterada
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    handleUpdateUser({ name, about: description }); // Atualiza as informações do usuário
  };

  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_name"
          id="owner-name"
          maxLength="40"
          minLength="2"
          name="userName"
          placeholder="Nome"
          required
          type="text"
          value={name} // Vincular nome ao campo de entrada
          onChange={handleNameChange} // Adicionar manipulador onChange
        />
        <span className="popup__error" id="owner-name-error"></span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_description"
          id="owner-description"
          maxLength="200"
          minLength="2"
          name="userDescription"
          placeholder="Sobre mim"
          required
          type="text"
          value={description} // Vincular nome ao campo de entrada
          onChange={handleDescriptionChange} // Adicionar manipulador onChange
        />
        <span className="popup__error" id="owner-description-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}

export default EditProfile;