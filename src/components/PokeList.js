import React from "react";
import PokeCard from "./PokeCard";

const PokeList = ({ pokeList, onShow, isMobile }) => {
  return (
    <div className="card-list">
      {pokeList.map((p) => (
        <PokeCard
          key={p.id}
          pokemon={p}
          onShow={onShow}
          isMobile={isMobile}
        ></PokeCard>
      ))}
    </div>
  );
};

export default PokeList;
