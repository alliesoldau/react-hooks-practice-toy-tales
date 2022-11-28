import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyData }) {

  const toyDataCollection = toyData.map((toy) => {
    return (
      <ToyCard
        key={toy.id}
        toy={toy}
      />
    )
  })
  return (
    <div id="toy-collection">{toyDataCollection}</div>
  );
}

export default ToyContainer;
