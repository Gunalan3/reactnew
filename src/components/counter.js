import React from "react";
import UseCounter from "../customhooks.js/usecounter";

const Counter = () => {
  const [value, increment, decrement] = UseCounter(0);

  return (
    <div className="displayFlex">
      <h1> {value}</h1>
      <button className="button" onClick={increment}>
        Add
      </button>
      <button className="button" onClick={decrement}>
        Remove
      </button>
    </div>
  );
};

export default Counter;
