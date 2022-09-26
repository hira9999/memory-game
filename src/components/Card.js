import React from "react";

const Card = ({ card, handleClick, flipped }) => {
  return (
    <div className="card" onClick={() => handleClick(card)}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={`/img/${card.item}.png`} alt="front" />
        <img className="back" src={`/img/cover.png`} alt="back" />
      </div>
    </div>
  );
};

export default Card;
