import React from "react";
import IconEdit from "../images/icon-edit.svg";
import IconAdd from "../images/icon-add.svg";
import { api } from "../utils/Api";
import Card from "./Card";
import "../index.css";

function Main(props) {
  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialUser(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        //установка данных пользователя
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar-img">
          <img
            src={`${userAvatar}`}
            alt="Фото профиля"
            className="profile__avatar"
          />
          <button
            onClick={props.onEditAvatar}
            title="Загрузить аватар"
            className="profile__avatar-button"
          ></button>
        </div>
        <h1 className="profile__user-name">{`${userName}`}</h1>
        <p className="profile__user-job">{`${userDescription}`}</p>
        <button
          onClick={props.onEditProfile}
          type="button"
          className="profile__edit-button"
        >
          <img
            src={IconEdit}
            alt="Редактировать профиль"
            className="profile__icon-button"
          />
        </button>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-button"
        >
          <img
            src={IconAdd}
            alt="Добавить"
            className="profile__icon-addbutton"
          />
        </button>
      </section>
      <section className="elements content__elements">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onImageClick={props.onImageClick}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
