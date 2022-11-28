import React, { useState } from "react";

function ToyCard({ toy, deleteToy, handleUpdateLikes }) {

  const [toyLikes, setToyLikes] = useState(toy.likes)

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then((deleteToy(toy)))
  }

  function updateLikes() {
    setToyLikes(toyLikes + 1)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toyLikes
      }),
    })
    .then((r) => r.json())
    .then((data) => handleUpdateLikes(data))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button 
        className="like-btn"
        onClick={updateLikes}
        >
          Like {"<3"}
        </button>
      <button 
        className="del-btn"
        onClick={handleDeleteClick}
        >
          Donate to GoodWill
        </button>
    </div>
  );
}

export default ToyCard;
