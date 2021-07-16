import { Button } from "@material-ui/core";
import React from "react";
import "./car.css";
const Car = ({ imgSrc, model, testDrive }) => {
  return (
    <div className="car">
      <div className="car__img">
        <img src={imgSrc} alt={model} />
      </div>
      <h2 className="car__model">{model}</h2>
      <div className="car__actions">
        <button>ORDER</button>
        {testDrive && <button></button>}
      </div>
      <div className="car__info">
        <span>Request a Call</span>to speak with a product speacialist, value
        your trade-in or apply for leasing
      </div>
    </div>
  );
};

export default Car;
