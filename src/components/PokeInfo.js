import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const PokeInfo = ({ pokemon: { id, name, stats, sprites, types } }) => {
  const zeroFill = (num) => {
    return ("000" + num).slice(-3);
  };
  zeroFill(id);

  return (
    <div className="info-container">
      <h1>
        {name[0].toUpperCase() + name.slice(1)} <span>#{zeroFill(id)}</span>
      </h1>
      <img src={sprites?.other?.["official-artwork"]?.front_default}></img>
      <div className="type-container">
        {types.map((e) => (
          <span key={e.type.name} className={"type " + e.type.name}>
            {e.type.name.toUpperCase()}
          </span>
        ))}
      </div>
      <div>
        <p>HP: {stats[0].base_stat}</p>
        <p>Attack: {stats[1].base_stat}</p>
        <p>Defense: {stats[2].base_stat}</p>
        <p>Special Attack: {stats[3].base_stat}</p>
        <p>Special Defense: {stats[4].base_stat}</p>
        <p>Speed: {stats[5].base_stat}</p>
      </div>
    </div>
  );
};

export default PokeInfo;
