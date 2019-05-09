import React from "react";

const Featured = ({ match }) => {
  //* must match with App.js Route component*
  let name = match.params.name;

  let topic = match.params.topic;
  return (
    <div className="main-content">
      <h1>{name}</h1>
      <p>
        Introducing {name}, a teacher who loves teaching courses about {topic}!
      </p>
    </div>
  );
};

export default Featured;
