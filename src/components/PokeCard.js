import React from "react";

const PokeCard = ({ pokemon: { id, sprites, name, ...rest }, onShow }) => {
  return (
    <div className="card" onClick={() => onShow(id)}>
      <span>
        {id}. {name[0].toUpperCase() + name.slice(1)}
      </span>
      <img src={sprites.front_default} alt={"pokemon front"}></img>
    </div>
  );
};

export default PokeCard;
