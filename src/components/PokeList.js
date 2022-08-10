import React from "react";
import PokeCard from "./PokeCard";

const PokeList = ({ pokeList, onShow }) => {
  return (
    <div className="card-list">
      {pokeList.map((p) => (
        <PokeCard key={p.id} pokemon={p} onShow={onShow}></PokeCard>
      ))}
    </div>
  );
};

export default PokeList;
