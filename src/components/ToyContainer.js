import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyData, deleteToy }) {

  const toyDataCollection = toyData.map((toy) => {
    return (
      <ToyCard
        key={toy.id}
        toy={toy}
        deleteToy={deleteToy}
      />
    )
  })
  return (
    <div id="toy-collection">{toyDataCollection}</div>
  );
}

export default ToyContainer;
