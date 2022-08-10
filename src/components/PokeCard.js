import React from "react";

const PokeCard = ({ pokemon: { id, sprites, name, ...rest }, onShow }) => {
  const imgSrc = sprites.front_default
    ? sprites.front_default
    : "https://64.media.tumblr.com/68a7768dcd4717cc67dcb9e55acaae07/3293d9c615ed5031-3f/s540x810/dec4bdac1a2e37526ba72af6e428d3fca7fced7c.pnj";

  return (
    <div className="card" onClick={() => onShow(id)}>
      <span>
        {id}. {name[0].toUpperCase() + name.slice(1)}
      </span>
      <img
        src={imgSrc}
        style={sprites.front_default ? {} : { height: "80%" }}
        alt={"pokemon front"}
      ></img>
    </div>
  );
};

export default PokeCard;
