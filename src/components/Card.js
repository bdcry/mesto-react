import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
    props.onImageClick();
  }
  return (
    <article className="element">
      <button className="element__delete"></button>
      <img
        onClick={handleClick}
        src={`${props.card.link}`}
        alt={`${props.card.name}`}
        className="element__photo"
      />
      <div className="element__text">
        <h2 className="element__title">{`${props.card.name}`}</h2>
        <div>
          <button type="button" className="element__heart"></button>
          <br />
          <span className="element__heart-count">{`${props.card.likes.length}`}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
