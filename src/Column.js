import React from "react";
import Card from "./Card";

export default ({ column, onAddCard }) => (
  <div className="column">
    <h1>{column.name}</h1>
    {column.cards.map((card, cardIndex) => (
      <Card card={card} key={cardIndex} />
    ))}
    <button onClick={onAddCard}>Add a card +</button>
  </div>
);
