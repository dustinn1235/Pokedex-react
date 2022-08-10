import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const PokeInfo = ({ pokemon: { id, name, stats, sprites, types } }) => {
  const imgSrc = sprites?.other?.["official-artwork"]?.front_default
    ? sprites?.other?.["official-artwork"]?.front_default
    : "https://i.imgur.com/6sYxOAI.jpg";

  const zeroFill = (num) => {
    return num < 1000 ? ("000" + num).slice(-3) : num;
  };
  zeroFill(id);

  return (
    <div className="info-container">
      <h1>
        {name[0].toUpperCase() + name.slice(1)} <span>#{zeroFill(id)}</span>
      </h1>
      <img src={imgSrc}></img>
      <div className="type-container">
        {types.map((e) => (
          <span key={e.type.name} className={"type " + e.type.name}>
            {e.type.name.toUpperCase()}
          </span>
        ))}
      </div>
      <div className="stat-container">
        <span>
          <p className="stat-name">HP:</p> {stats[0].base_stat}
        </span>
        <span>
          <p className="stat-name">Attack:</p> {stats[1].base_stat}
        </span>
        <span>
          <p className="stat-name">Defense:</p> {stats[2].base_stat}
        </span>
        <span>
          <p className="stat-name">Special Attack:</p> {stats[3].base_stat}
        </span>
        <span>
          <p className="stat-name">Special Defense:</p> {stats[4].base_stat}
        </span>
        <span>
          <p className="stat-name">Speed:</p> {stats[5].base_stat}
        </span>
      </div>
    </div>
  );
};

export default PokeInfo;
