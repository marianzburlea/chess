import { useEffect } from "react";
import "./chess.css";
import { useState } from "react";

const length = 64;

const handleClick = (e) => {
  console.log(e.target.getAttribute("name"));
};

const Chess = () => {
  const tileList = Array.from({ length }, (_, k) => (
    <div name={k} className="tile" onClick={handleClick}>
      {k + 1}
    </div>
  ));

  return (
    <div>
      <h1>Chess</h1>
      <p>generate here</p>
      <div className="chess">{tileList}</div>
    </div>
  );
};

export { Chess };
