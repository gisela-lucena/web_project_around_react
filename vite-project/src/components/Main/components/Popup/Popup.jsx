export default function Popup(props) {
  //children é o conteúdo de popup
  const { title, children } = props;

  return (
    <div className="popup">
      <div className="popup__content">
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
        />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}

//   return (
//     <>
//       <div className="popup" id="edit-popup-profile">
//         <div className="popup__content popup__container popup__container_type_image">
//           <button
//             aria-label="Close popup"
//             className="popup__close"
//             type="button"
//           >
//             <img
//               className="popup__close-icon"
//               src="./images/addButton.png"
//               alt="Fechar
//           popup"
//             />
//           </button>
//           <h3 className="popup__title">Editar Perfil{title}</h3>
//           {children}
//           <form className="popup__form" id="edit-profile-form" novalidate>
//             <div className="popup__input-container">
//               <input
//                 className="popup__input popup__input_edit_name"
//                 name="name"
//                 placeholder="Nome"
//                 type="text"
//                 required
//                 minlength="2"
//                 maxlength="40"
//               />
//               <span className="popup__input-error popup__input-name-error"></span>
//             </div>
//             <div className="popup__input-container popup__container popup__container_type_image">
//               <input
//                 className="popup__input popup__input_edit_profession"
//                 name="job"
//                 placeholder="Sobre Mim"
//                 type="text"
//                 required
//                 minlength="2"
//                 maxlength="200"
//               />
//               <span className="popup__input-error popup__input-profession-error"></span>
//             </div>
//             <button
//               disabled
//               className="popup__button popup__button-active popup__button-disabled"
//               type="submit"
//               data-default-text="Salvar"
//             >
//               Salvar
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
