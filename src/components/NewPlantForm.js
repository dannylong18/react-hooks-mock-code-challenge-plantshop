import React, {useState, useEffect} from "react";

function NewPlantForm( {onAddPlant} ) {

  const formObj = {
    name: '',
    image: '',
    price: 0
  }
  const [plantData, setPlantData] = useState (formObj)
  
  function handleInput (e) {
    const {name, value} = e.target;
    setPlantData({...plantData, [name] : value})
  }

  function handleSubmit (e) {
    e.preventDefault();
    fetch('http://localhost:6001/plants',{
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(plantData),}
    )
    .then(r => r.json())
    .then(plantObj => onAddPlant(plantObj))
    
    setPlantData(formObj)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantData.name} onChange={handleInput}/>
        <input type="text" name="image" placeholder="Image URL" value={plantData.image} onChange={handleInput}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantData.price} onChange={handleInput}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
