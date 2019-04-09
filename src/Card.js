import React from "react";

export default ({
  card,
  onArrow,
  canMoveLeft,
  canMoveRight,
  onMoveLeft,
  onMoveRight
}) => (
  <div className="card">
    {canMoveLeft && <button onClick={onMoveLeft}>{"<"}</button>}
    <span className="title">{card.name}</span>
    {canMoveRight && <button onClick={onMoveRight}>{">"}</button>}{" "}
  </div>
);
