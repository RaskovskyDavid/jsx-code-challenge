import React from "react";
import ReactDOM from "react-dom";
//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
const name = "David";
const lastname = "Raskovsky";
ReactDOM.render(
  <div>
    <h1>{lastname + " " + name} favourite Foods</h1>
    <ul>
      <li>Milanesa Sandwich {Math.floor(Math.random() * 5)} stars</li>
      <li>{`${name} Pizza`}</li>
      <li>Locro</li>
    </ul>
  </div>,
  document.getElementById("root")
);
