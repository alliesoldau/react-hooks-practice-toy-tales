import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyData, deleteToy, handleUpdateLikes }) {

  const toyDataCollection = toyData.map((toy) => {
    return (
      <ToyCard
        key={toy.id}
        toy={toy}
        deleteToy={deleteToy}
        handleUpdateLikes={handleUpdateLikes}
      />
    )
  })
  return (
    <div id="toy-collection">{toyDataCollection}</div>
  );
}

export default ToyContainer;
