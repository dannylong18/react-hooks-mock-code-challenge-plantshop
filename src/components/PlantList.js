import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants} ) {

  const displayedPlants = plants.map((obj, index) => {
    return (
      <div key={index}>
        <PlantCard key={obj.id} id={obj.id} name={obj.name} image={obj.image} price={obj.price} />
      </div>
    )
  })

  return (
    <ul className="cards">{displayedPlants}</ul>
  );
}

export default PlantList;
