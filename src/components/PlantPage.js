import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect (() => {
    fetch('http://localhost:6001/plants')
    .then (r => r.json())
    .then (data => setPlants(data))
  }, [])

  function handleAddPlant (newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleSearchPlant (query) {
    setSearchQuery(query)
  }
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearch={handleSearchPlant}/>
      <PlantList plants={plants.filter(item => item.name.toLowerCase().startsWith(searchQuery.toLowerCase()))} />
    </main>
  );
}

export default PlantPage;
