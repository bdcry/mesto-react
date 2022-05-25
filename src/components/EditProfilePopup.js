import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
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
      name="profile"
      title="Редактировать профиль"
      text="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Имя"
        className="popup__input popup__input_string_name"
        minLength={2}
        maxLength={40}
        required
      />
      <span id="name-error" className="popup__error"></span>
      <input
        id="profession"
        type="text"
        name="about"
        placeholder="Работа"
        className="popup__input popup__input_string_job"
        minLength={2}
        maxLength={200}
        required
      />
      <span id="profession-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
