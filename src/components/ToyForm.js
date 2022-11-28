import React, { useState } from "react";

function ToyForm({ onNewToySubmit }) {

  const [toyName, setToyName] = useState("");
  const [imageURL, setImageURL] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("here")
    const newToy = {
      name: toyName,
      image: imageURL,
      likes: 0
    }
    console.log(newToy);
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy)
    })
    .then((r) => r.json())
    .then((onNewToySubmit))
    setToyName("");
    setImageURL("")
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName}
          onChange={(e) => setToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}
export default ToyForm;
