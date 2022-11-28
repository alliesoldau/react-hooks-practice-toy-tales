import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((response) => response.json())
    .then((data) => setToyData(data))
    }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy) {
    setToyData([...toyData, newToy]);
  }

  function deleteToy(toyRIP) {
    const updatedToys=toyData.filter((toy) => toy.id !== toyRIP.id)
    setToyData(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToySubmit={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toyData={toyData}
        deleteToy={deleteToy}
      />
    </>
  );
}

export default App;
