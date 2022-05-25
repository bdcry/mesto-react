import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  React.useEffect(() => {
    if (!props.isOpen) return;

    function handleEsc(e) {
      if (e.key === "Escape") {
        props.onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [props.isOpen]);

  React.useEffect(() => {
    if (!props.isOpen) return;

    function handleClickClose(e) {
      if (e.target.className.includes("popup_opened")) {
        props.onClose();
      }
    }

    document.addEventListener("mousedown", handleClickClose);
    return () => {
      document.removeEventListener("mousedown", handleClickClose);
    };
  }, [props.isOpen]);
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      text="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        id="avatar"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_avatar_url"
        required
      />
      <span id="avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
